import React, { useEffect, useReducer, useState } from 'react';
import { padStart } from 'lodash';
import { AxiosResponse } from 'axios';

import './App.css';

import { pokemonInstance } from './pokemon-axios';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Main from './components/Main/Main';
import Lists from './components/Lists/Lists';
import Modal from './components/Modal/Modal';

import { IPokemon, IPokemonType, IPokemonResponse } from './types/pokemon';
import Loader from './components/Loader/Loader';
import LoadMore from './components/Lists/LoadMore';

const formatResponse = async (url: string) => {
  const { data } = await pokemonInstance.get(url);
  return {
    name: data.name,
    pokedexNumber: padStart(data.id, 3, '0'),
    types: data.types.map(({ type }: IPokemonType) => {
      return type.name;
    })
  };
};
interface IList {
  limit: number;
  offset: number;
  data: IPokemon[];
}
interface IParams {
  type: string;
  region: string;
  weakness: string;
}
interface IFilter extends IParams {
  keyword: string;
}
interface IState {
  isLoading: boolean;
  list: IList;
  filters: IFilter;
  params: IParams;
}
interface IALoadList {
  type: 'load_list';
  payload: { data: IPokemon[] }
};

interface IARequestList {
  type: 'request_list';
  payload: { isLoading: boolean }
};

// type TAction = { type: 'loadlist', payload: { data: IPokemon[] } }
type TAction = IALoadList | IARequestList;

const initialState: IState = {
  isLoading: false,
  list: {
    limit: 0,
    offset: 0,
    data: []
  },
  filters: {
    keyword: '',
    region: '',
    type: '',
    weakness: '',
  },
  params: {
    region: '',
    type: '',
    weakness: '',
  },
};

const reducer = (state: IState = initialState, action: TAction): IState => {
  switch (action.type) {
    case 'request_list':
      return {
        ...state,
        isLoading: true,
      };
    case 'load_list':
      const data = state.list.data as IPokemon[];
      return {
        ...state,
        isLoading: false,
        list: {
          ...state.list,
          data: [...data, ...action.payload.data]
        }
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(12);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getParams = async () => {
      const { data: regions }: AxiosResponse = await pokemonInstance.get('/region');
      console.log('regions: ', regions);
    };
    getParams();
  }, []);

  useEffect(() => {
    const getPokemons = async () => {
      dispatch({
        type: 'request_list',
        payload: {
          isLoading: true,
        }
      });
      const { data }: AxiosResponse = await pokemonInstance.get(`/pokemon?limit=${limit}&offset=${offset}`);
      const pokemonPromises = data.results.map((value: IPokemonResponse) => {
        return formatResponse(value.url);
      });
      const pokemons = await Promise.all(pokemonPromises);
      /*
      setPokemons(prevPokemons => {
        return [...prevPokemons, ...pokemons] as IPokemon[];
      });
      */
      dispatch({
        type: 'load_list',
        payload: {
          data: (pokemons as IPokemon[]),
        }
      });
      // setIsLoading(false);
    };
    getPokemons();
  }, [limit, offset]);

  const loadMoreHandler = () => {
    setIsLoading(true);
    setOffset(limit);
    setLimit(prevLimit => {
      return limit + 12;
    });
  };

  const renderList = () => {
    return (
      <>
        <Lists items={state.list.data} />
        {isLoading ? <Loader /> : <LoadMore onLoadMore={loadMoreHandler} />}
      </>
    )
  }

  return (
    <>
      <Header />
      <Main>
        <Filter />
        {state.list.data.length ? renderList() : <Loader />}
      </Main>
      <Modal />
    </>
  );
}

export default App;
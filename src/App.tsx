import React, { useEffect, useState } from 'react';
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
  console.log('formatResponse: ', data);
  return {
    name: data.name,
    pokedexNumber: padStart(data.id, 3, '0'),
    types: data.types.map(({ type }: IPokemonType) => {
      return type.name;
    })
  };
};

function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(12);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('Re-render: ', Math.random());
  });
  useEffect(() => {
    const getAttributes = async () => {
      const { data }: AxiosResponse = await pokemonInstance.get(`/pokemon`);
      console.log('data: ', data);
    };

    getAttributes();
  }, []);

  useEffect(() => {
    const getPokemons = async () => {
      const { data }: AxiosResponse = await pokemonInstance.get(`/pokemon?limit=${limit}&offset=${offset}`);
      const pokemonPromises = data.results.map((value: IPokemonResponse) => {
        return formatResponse(value.url);
      });
      const pokemons = await Promise.all(pokemonPromises);
      setPokemons(prevPokemons => {
        return [...prevPokemons, ...pokemons] as IPokemon[];
      });
      setIsLoading(false);
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
        <Lists items={pokemons} />
        {isLoading ? <Loader /> : <LoadMore onLoadMore={loadMoreHandler} />}
      </>
    )
  }

  return (
    <>
      <Header />
      <Main>
        <Filter />
        {pokemons.length ? renderList() : <Loader />}
      </Main>
      <Modal />
    </>
  );
}


export default App;

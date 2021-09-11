import React, { useEffect, useState } from 'react';
import { padStart } from 'lodash';
import { AxiosResponse } from 'axios';

import './App.css';

import { pokemonInstance } from './pokemon-axios';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Main from './components/Main/Main';
import Lists from './components/Lists/Lists';

import { IPokemon, IPokemonType, IPokemonResponse } from './types/pokemon';
import Loader from './components/Loader/Loader';


const formatResponse = async (url: string) => {
  const { data } = await pokemonInstance.get(url);
  console.log(data);
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

  useEffect(() => {
    const getPokemons = async () => {
      const { data }: AxiosResponse = await pokemonInstance.get('/pokemon?limit=48&offset=0');
      const pokemonPromises = data.results.map((value: IPokemonResponse) => {
        return formatResponse(value.url);
      });
      setPokemons(await Promise.all(pokemonPromises));
    };
    getPokemons();
  }, []);

  const renderList = () => {
    return (
      <>
        <Lists items={pokemons} />
        <div className="mb-7 flex justify-center">
          <button className="font-bold text-white rounded border-b-2 border-red-500 bg-red-500 hover:border-red-800 shadow-md py-2 px-6 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="mr-2">Load More</span>
          </button>
        </div>
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
    </>
  );
}


export default App;

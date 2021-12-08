import { padStart } from 'lodash';
import { IPokemonType } from '../types/pokemon';
import { pokemonInstance } from '../pokemon-axios';

export const getPokemonDetails = async (url: string) => {
    const { data } = await pokemonInstance.get(url);
    return {
        name: data.name,
        pokedexNumber: padStart(data.id, 3, '0'),
        types: data.types.map(({ type }: IPokemonType) => {
            return type.name;
        })
    };
};
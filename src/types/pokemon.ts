export interface IPokemonResponse {
    url: string;
}

export interface IPokemon {
    name: string;
    pokedexNumber: string;
    types: string[];
}

export interface IPokemonType {
    slot?: Number;
    type: {
        name: string;
    };
};

import React from 'react';
import Card from './Card';
import { IPokemon } from '../../types/pokemon';

interface IListProps {
    items?: IPokemon[];
}

const Lists: React.FunctionComponent<IListProps> = ({ items = [] }) => {
    console.log(items);
    return (
        <div className="my-16 flex flex-wrap gap-x-5 gap-y-5 justify-center ">
            {
                items.length !== 0 && items.map(value => {
                    return <Card name={value.name} pokedexNumber={value.pokedexNumber} types={value.types} />
                })
            }
        </div>
    );
};

export default Lists;
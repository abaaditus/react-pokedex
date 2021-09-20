import React from 'react';
import { upperFirst, upperCase } from 'lodash';
import { IPokemon } from '../../types/pokemon';

interface ICardProps extends IPokemon {
}

const getTypeStyle = (type: string) => {
    let backgroundColor = "";
    switch (type) {
        case "grass":
            backgroundColor = "#9bcc50";
            break;
        case "poison":
            backgroundColor = "#b97fc9";
            break;
        case "fire":
            backgroundColor = "#fd7d24";
            break;
        case "flying":
            backgroundColor = "#3dc7ef";
            break;
        case "water":
            backgroundColor = "#4592c4";
            break;
        case "bug":
            backgroundColor = "#729f3f";
            break;
        case "normal":
            backgroundColor = "#a4acaf";
            break;
        case "electric":
            backgroundColor = "#eed535";
            break;
        case "ground":
            backgroundColor = "#ab9842";
            break;
        case "fairy":
            backgroundColor = "#fdb9e9";
            break;
        case "fighting":
            backgroundColor = "#d56723";
            break;
        case "psychic":
            backgroundColor = "#f366b9";
            break;
        case "rock":
            backgroundColor = "#a38c21";
            break;
        case "steel":
            backgroundColor = "#9eb7b8";
            break;
        case "ghost":
            backgroundColor = "#7b62a3";
            break;
        case "ice":
            backgroundColor = "#51c4e7";
            break;
        case "dragon":
            backgroundColor = "#f16e57";
            break;
        default:
            backgroundColor = "#000";
            break;
    }
    return backgroundColor;
};

const imgStyles = {
    height: '200px'
};

const cardStyles = {
    minHeight: '300px',
    minWidth: '240px',
};
const Card: React.FunctionComponent<ICardProps> = ({ name, pokedexNumber, types }) => {
    const imgUrl = `https://img.pokemondb.net/artwork/large/${name}.jpg`;
    return (
        <div className="flex items-center" style={cardStyles}>
            <div className="p-5 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 w-full h-full transition-all transform duration-500">
                <div className="flex" >
                    <img className="w-36 m-auto object-scale-down rounded-md" style={imgStyles} src={imgUrl} alt="" />
                </div>
                <div className="mt-2">
                    <h1 className="text-xl font-bold text-gray-700 text-center">{upperFirst(name)}</h1>
                    <p className="text-sm mt-2 text-gray-700 text-center">#{pokedexNumber}</p>
                    <div className="mt-4 mb-2 flex justify-center gap-2">
                        {
                            types.map(name => {
                                return (
                                    <span className="text-xs block font-bold py-2 px-4 text-black rounded-xl shadow hover:shadow-md transition duration-300" style={{ backgroundColor: getTypeStyle(name) }}>
                                        {upperCase(name)}
                                    </span>
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;
import React from 'react';
import pokeballLogo from './pokeball.png';

const Header = () => {
    return (
        <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8 bg-red-500">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="lg:block h-8 w-auto"
                                src={pokeballLogo}
                                alt="Workflow"
                            />
                            <span className="hidden px-3 text-4xl tracking-wider text-white font-rampart md:inline">POKEDEX</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Header;
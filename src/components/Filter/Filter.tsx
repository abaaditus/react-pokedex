import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

const FilterExperiment = () => {
    return (
        <>
            <div className="flex relative items-center">
                <input
                    type="text"
                    name="input-filter"
                    id="input-filter"
                    className="focus:ring-4 focus:ring-red-500 focus:border-red-500 flex-1 block w-full rounded-none rounded-md sm:text-sm md:text-lg border-0 p-2 pl-12 shadow-md placeholder-gray-600 placeholder-opacity-50"
                    placeholder="Search pokemon"
                    autoComplete="off"
                />
                <div className="absolute left-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <button className="bg-green-400 active:bg-green-600 active:ring-4 ring-green-700 ring-offset-2 ml-2 shadow-lg text-white text-base rounded-md px-4 py-2 font-semibold transition duration-3000" type="button">Search</button>
            </div>

            <div className="mt-8 gap-4 flex flex-wrap justify-between flex-col lg:flex-row">
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </div>
        </>
    )
};

export default FilterExperiment;
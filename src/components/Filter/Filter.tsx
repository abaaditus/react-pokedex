import React, { useEffect } from 'react';
import { useParams } from '../../states/params';
import Dropdown from '../Dropdown/Dropdown';

interface IFilterProps {
    regions: [],
    types: [],
    weaknesses: [],
}

// const Filter: React.FunctionComponent<IFilterProps> = ({
const Filter = () => {
    const { params, getParams } = useParams();

    useEffect(() => {
        const fetchParamList = async () => {
            await getParams();
        };

        fetchParamList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // if (regions.length === 0 || types.length === 0 || weaknesses.length === 0) {
    //     return null;
    // }

    if (params.regions.length === 0 || params.types.length === 0 || params.weaknesses.length === 0) {
        return null;
    }

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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <button className="bg-green-400 active:bg-green-600 active:ring-4 ring-green-700 ring-offset-2 ml-2 shadow-lg text-white text-base rounded-md px-4 py-2 font-semibold transition duration-3000" type="button">Search</button>
            </div>

            <div className="mt-8 gap-4 flex flex-wrap justify-between flex-col lg:flex-row">
                <Dropdown label='regions' list={params.regions} />
                <Dropdown label='types' list={params.types} />
                <Dropdown label='weaknesses' list={params.weaknesses} />
            </div>
        </>
    )
};

export default Filter;
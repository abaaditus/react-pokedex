import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Filter = () => {
    return (
        <>
            <form>
                <div className="relative rounded-md shadow-md">
                    <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 p-4 shadow-md"
                        placeholder="Search pokemon"
                    />

                    <button
                        type="submit"
                        className="absolute right-14 top-2 border border-transparent rounded-full text-base text-white shadow-md bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    <button
                        type="submit"
                        className="absolute right-3 top-2 border border-transparent rounded-full text-base text-white shadow-md bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>

                    </button>
                </div>
                <div className="mt-8 gap-4 flex flex-wrap justify-between flex-col lg:flex-row">
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                </div>
            </form>
        </>
    );
};

export default Filter;
import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

interface ILoadMoreProps {
    onLoadMore: () => void,
}

const LoadMore: React.FC<ILoadMoreProps> = ({ onLoadMore }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        console.log('mounted');
    }, []);

    const onClickHandler = () => {
        setIsLoading(true);
        onLoadMore();
    };

    const renderButton = () => {
        return (
            <div className="mb-7 flex justify-center">
                <button onClick={onClickHandler} className="font-bold text-white rounded border-b-2 border-red-500 bg-red-500 hover:border-red-800 shadow-md py-2 px-6 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="mr-2">Load More</span>
                </button>
            </div>
        );
    }

    return (
        <>
            {!isLoading ? renderButton() : <Loader />}
        </>
    );
};

export default LoadMore;
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Loader = () => {
    return (
        <div className="flex pt-36 justify-center" >
            <span className="text-red-500 my-0 mx-auto w-0 h-0">
                <FontAwesomeIcon icon={faCircleNotch} size="5x" spin />
            </span>
        </div>
    );
};

export default Loader;
import React from 'react';

const Main: React.FunctionComponent = (props) => {
    return (
        <div className="container mx-auto pt-8 px-4 sm:px-0 lg:max-w-screen-lg">
            {props.children}
        </div>
    );
}

export default Main;
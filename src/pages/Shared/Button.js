import React from 'react';

const Button = (props) => {
    return (
        <>
            <button className="text-red-800">
                {props.children}
            </button>   
        </>
    );
};

export default Button;
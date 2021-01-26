import React from 'react';

function FunctionClick() {
    function clickHandler() {
        console.log("Clicked from function.");
    }

    return (
        <div>
            <button onClick={clickHandler}>Function CLick</button>
        </div>
    )
}

export default FunctionClick;

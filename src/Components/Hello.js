import React from 'react';

const Hello = () => {
    // Not Preferred:
    // return  (
    //     <div>
    //         <h1>Hello Kandarp</h1>
    //     </div>
    // );
    // Preferred:
    return React.createElement(
        'div',
        {id: "hello", className: "classHello"},
        React.createElement(
            'h1',
            null,
            "Hello Kandarp"
        )
    );
}

export default Hello;

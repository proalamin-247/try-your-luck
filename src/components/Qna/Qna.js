import React from 'react';
import './Qna.css'

const qna = () => {
    return (
        <div className='qna-area'>
            <div className='qus-1'>
                <h4>What’s different between props vs state ?</h4>
                <p>Ans: Props-
                    Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.

                    State-
                    The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again.</p>
            </div>
            <div className="qus-1">
                <h4>How useState works?</h4>
                <p>Ans:  The useState hook allows us to have state variables in the JSX functional component. It takes one argument which is the initial state and returns a state value and a function to update it.

                    useState is a named export from React, So, we can either do

                    'import <code>useState</code> from 'react'
                    React.useState and 
                    <br />
                    The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.
                    </p>
            </div>
        </div>
    );
};

export default qna;
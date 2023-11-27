import PropTypes from 'prop-types';
import React from 'react';

function CounterApp({value}) {
    
    
    return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
    </>
    );    
}

CounterApp.PropTypes = {
    value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;
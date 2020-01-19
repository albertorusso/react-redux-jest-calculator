import React from 'react';
import PropTypes from 'prop-types'
import './style.scss';

function CalculatorButton(props){

    return (
        <button className={`calculator-button calculator-button--${props.type}`} onClick={() => alert('clicked')}>
            {props.value}
        </button>
    )
}

CalculatorButton.propTypes = {
    /** Set the type of the button (action, operand or operation) */
    type: PropTypes.string.isRequired,

    /** Set the content of the button */
    value: PropTypes.string.isRequired
}

export default CalculatorButton;
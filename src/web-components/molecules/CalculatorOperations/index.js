import React from 'react';
import CalculatorButton from 'web-components/atoms/CalculatorButton'
import './style.scss';

function CalculatorOperations(props){
    return (
        <div className="calculator-operations">
            <div className="calculator-operations__button-container">
                <CalculatorButton type="operation" value="÷"/>
            </div>
            <div className="calculator-operations__button-container">
                <CalculatorButton type="operation" value="x"/>
            </div>
            <div className="calculator-operations__button-container">
                <CalculatorButton type="operation" value="-"/>
            </div>
            <div className="calculator-operations__button-container">
                <CalculatorButton type="operation" value="+"/>
            </div>
            <div className="calculator-operations__button-container">
                <CalculatorButton type="operation" value="="/>
            </div>
        </div>
    )
}

export default CalculatorOperations;
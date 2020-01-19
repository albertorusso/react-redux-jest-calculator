import React from 'react';
import CalculatorButton from 'web-components/atoms/CalculatorButton'
import './style.scss';

function CalculatorActions(props){
    return (
        <div className="calculator-actions">
            <CalculatorButton value="AC" type="action"/>
            <CalculatorButton value="SAVE" type="action-larger"/>
        </div>
    )
}

export default CalculatorActions;
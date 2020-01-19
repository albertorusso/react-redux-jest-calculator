import React from 'react';
import CalculatorContent from 'web-components/atoms/CalculatorContent'
import './style.scss';

function CalculatorDisplay(props){
    return (
        <div className="calculator-display">
            <div className="calculator-display__header">
                <CalculatorContent text="133"/>
            </div>
            <div class="calculator-display__result">
                <CalculatorContent classModifier="header" text="123 + 10 ="/>
            </div>
        </div>
    )
}

export default CalculatorDisplay;
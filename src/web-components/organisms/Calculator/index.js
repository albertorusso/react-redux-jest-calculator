import React from 'react';
import CalculatorDisplay from 'web-components/molecules/CalculatorDisplay'
import CalculatorActions from 'web-components/molecules/CalculatorActions'
import CalculatorOperands from 'web-components/molecules/CalculatorOperands'
import CalculatorOperations from 'web-components/molecules/CalculatorOperations'
import './style.scss';

function Calculator(props){
    return (
        <div className="calculator">
            <div className="calculator__display">
                <CalculatorDisplay />
            </div>
            <div className="calculator__keyboard">
                <div className="calculator__main-keyboard">
                    <div className="calculator__actions-section">
                        <CalculatorActions />
                    </div>
                    <div className="calculator__operands-section">
                        <CalculatorOperands />
                    </div>
                </div>
            <div className="calculator__operations-keyboard">
                <div className="calculator__operations-section">
                    <CalculatorOperations />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Calculator;
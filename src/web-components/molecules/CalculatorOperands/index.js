import React from 'react';
import CalculatorButton from 'web-components/atoms/CalculatorButton'
import './style.scss';

function CalculatorOperands(props){
    const values = ['.', 0, '', 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const createOperands = () => {
        let row = [];
        for(let i = 0; i < 4; i++){
            let childrend = [];
            for(let j = 0; j < 3; j++){
                if(values[(3 * i) + j] !== ''){
                    childrend.push(
                        <CalculatorButton value={values[(3 * i) + j]} type="operand"/>
                    )
                }
            }
            row.push(
                <div className="calculator-operands__button-row">
                    {childrend}
                </div>
            );
        }
        return row;
    }

    return (
        <div className="calculator-operands">
            {createOperands()}
        </div>
    )
}

export default CalculatorOperands;
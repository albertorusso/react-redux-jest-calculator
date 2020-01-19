export const CALCULATOR_ACTION_FUNCTIONALITY = 'calculator/action-functionality';
export const CALCULATOR_UPDATE_CURRENT_OPERAND = 'calculator/update-current-operand';
export const CALCULATOR_ADD_OPERAND = 'calculator/add-operand';

export function actionFunctionality(data){
    return ({
        type: CALCULATOR_ACTION_FUNCTIONALITY,
        data: data
    })
}

export function updateCurrentOperand(data){
    return ({
        type: CALCULATOR_UPDATE_CURRENT_OPERAND,
        data: data
    })
}

export function addOperand(data){
    return ({
        type: CALCULATOR_ADD_OPERAND,
        data: data
    })
}
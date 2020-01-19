import {
    CALCULATOR_ACTION_FUNCTIONALITY,
    CALCULATOR_UPDATE_CURRENT_OPERAND, 
    CALCULATOR_ADD_OPERAND
} from '../actions/calculator';

const INITIAL_STATE = {
    currentValue: '0',
    expression: '0',
    display: {
        expressionSummary: '',
        expression: '0'
    }
}

export default function user(state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case CALCULATOR_ACTION_FUNCTIONALITY:
  
            return {
                ...state,
                // id: action.data
            }

        case CALCULATOR_UPDATE_CURRENT_OPERAND:
            
            return {
                ...state,
                // token: action.data
            }

        case CALCULATOR_ADD_OPERAND:
        
            return {
                ...state,
                // data: action.payload
            }
        
        default:
            return state
    }
}
import * as actions from '../src/store/actions/calculator';

describe('actions', () => {
    it('should create and action functionality', () => {
        const data = 'finish docs';
        const expectAction = {
            type: actions.CALCULATOR_ACTION_FUNCTIONALITY,
            data
        }
        expect(actions.actionFunctionality(data)).toEqual(expectAction);
    })
});
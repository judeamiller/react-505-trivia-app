import * as  actions from   '../actions/actions';

const initialState = {
    score: 0

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.SUBMIT_ANSWER:
                return{
                    ...state,
                };

                default:
                    return state;
        }
    
}
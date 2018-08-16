
import * as actionTypes from './actions';

const initialState = {
    timeline: true
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SWITCH_TIMELINE: return {    
        	...state,
                timeline: !state.timeline

            }

        default: return state;
    }
};
export default reducer;
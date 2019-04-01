import { MAKE_CHANGE } from '../actions/type';

const initialState = {
  log: {
    count: 0,
    date: new Date()
  }
};


export default function postReducer(state = initialState, action) {
    switch(action.type) {
        case MAKE_CHANGE:
          return {
            ...state,
            log: action.payload
          }
        default:
           return state;
    }
}



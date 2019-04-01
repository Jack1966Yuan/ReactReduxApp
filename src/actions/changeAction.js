import { MAKE_CHANGE } from './type';

export const makeChange = (count) => (dispatch) => (
    dispatch({
        type: MAKE_CHANGE,
        payload: {
            count: count + 1,
            date: new Date()
        }
    })
)


import { NEW_POST } from './type';

/*
export function createPost(postData) {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts',
        { 
            method: 'POST',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POST,
            payload: data
        }));        
    }
}
*/

export const createPost = (postData) => (dispatch) => (
    fetch('https://jsonplaceholder.typicode.com/posts',
    { 
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: NEW_POST,
        payload: data
    }))
)

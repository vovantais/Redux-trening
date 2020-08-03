import { ADD_POST, REMOVE_POST, ADD_SECCUSS } from './actions-types';

export const AddPost = (value) => ({
   type: ADD_POST,
   payload: {
      value,
   },
})
export const RemovePost = () => ({
   type: REMOVE_POST,
})

export const AddSeccuss = (data) => ({
   type: ADD_SECCUSS,
   payload: data,
})

export const FetchData = () => (dispatch) => {
   fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => dispatch(AddSeccuss(json)))
}

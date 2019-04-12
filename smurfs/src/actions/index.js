import axios from 'axios';
export const FETCHING = 'FETCHING',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAILURE = 'FETCH_FAILURE',
  DEL = 'DEL',
  EDIT = 'EDIT',
  POST = 'POST';

export const fetch = () => dispatch => {
  dispatch({ type: FETCHING })
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({
      type: FETCH_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_FAILURE,
      payload: err
    }))
}

export const del = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({
      type: DEL,
      payload: res.data
    }))
    .catch(err => console.log(err))
}

export const post = newSmurf => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => dispatch({
      type: POST,
      payload: res.data
    }))
}

export const edit = (id, upSmurf) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, upSmurf)
    .then(res => dispatch({
      type: DEL,
      payload: res.data
    }))
    .catch(err => console.log(err))
}

import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE, DEL, POST, EDIT } from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  fetched: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        fetched: true
      }
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case DEL:
      return {
        ...state,
        smurfs: action.payload
      }
    case EDIT:
      return {
        ...state,
        smurfs: action.payload
      }
    case POST:
      return {
        ...state,
        smurfs: action.payload
      }
    default:
      return state;
  }
}

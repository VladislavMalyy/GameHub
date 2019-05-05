// ------------------------------------
// Constants
// ------------------------------------
const SET_VALUE = 'SET_VALUE';

export const setValue = (val) => (dispath) => {
  dispath({
    type: SET_VALUE,
    payload: val
  });
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const actionHandler = {
  [SET_VALUE]: (action, state) => {
    return action.payload;
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 1;

export default function currentReducer(state = initialState, action) {
  if (action.readyState) {
    let handler = actionHandler[action.type];
    return (handler && handler(action, state)) || state;
  }
  return state;
}

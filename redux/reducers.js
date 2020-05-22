import {
  SET_TIMER, RUN_TIMER
} from './actions';

export const exampleInitialState = {
  timer: 0,
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case SET_TIMER:
      return Object.assign({}, state, {
        timer: action.timer
      });
    default:
      return state;
  }
}

export default reducer;
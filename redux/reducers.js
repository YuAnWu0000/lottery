import {
  SET_TIMER, SET_WINNING_PERSON
} from './actions';

export const exampleInitialState = {
  timer: 0,
  peopleList: [
    {
      id: 0,
      name: 'Kobe Bryant'
    },
    {
      id: 1,
      name: 'Stephen Curry'
    },
    {
      id: 2,
      name: 'LeBron James'
    },
    {
      id: 3,
      name: 'Allen Iverson'
    },
    {
      id: 4,
      name: 'Vince Carter'
    },
  ],
  winningPerson: null,
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case SET_TIMER:
      return Object.assign({}, state, {
        timer: action.timer
      });
    case SET_WINNING_PERSON:
      const max = state.peopleList.length;
      // 產生隨機id
      const winningId = Math.floor(Math.random() * max);
      return Object.assign({}, state, {
        winningPerson: state.peopleList.find(person => person.id === winningId)
      });
    default:
      return state;
  }
}

export default reducer;
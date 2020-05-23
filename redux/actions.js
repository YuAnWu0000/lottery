/*
 * action types
 */
export const SET_TIMER = 'SET_TIMER'
export const SET_WINNING_PERSON = 'SET_WINNING_PERSON'

/*
 * action creator
 */
export function setTimer(timer) {
  return { type: SET_TIMER, timer };
}

export function setWinningPerson() {
  return { type: SET_WINNING_PERSON }
}
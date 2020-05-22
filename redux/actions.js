/*
 * action types
 */
export const SET_TIMER = 'SET_TIMER'

/*
 * action creator
 */
export function setTimer(timer) {
  return { type: SET_TIMER, timer };
}
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { connect } from 'react-redux'
import { setTimer, runTimer } from '../redux/actions'

const Timer = ({timer, confirmTimer}) => {
  return (
    <div>
      <input type="text" id="time"></input>
      <span>秒</span>
      <button onClick={confirmTimer}>設定</button>
      <div>{moment(timer*1000).format('mm:ss')}</div>
    </div>
  )
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  confirmTimer: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.timer);
  return {
    timer: state.timer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    confirmTimer: (e) => {
      const time = e.target.parentNode.querySelector("#time").value;
      if (time > 60) return;
      else {
        dispatch(setTimer(parseFloat(time)));
        const startTime = Date.now();
        const countDownTimer = setInterval(function() {
          const nowTime = Date.now();
          const remainTime = Math.round(time - ((nowTime - startTime) / 1000));
          dispatch(setTimer(remainTime));
          if (remainTime <= 0) {
            clearInterval(countDownTimer);
            console.log("Time's up!");
          }
        }, 1000);
      }
    }
  }
}

const TimerComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)

export default TimerComponent
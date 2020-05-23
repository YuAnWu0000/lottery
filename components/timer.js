import React, { Component, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { setTimer, setWinningPerson } from '../redux/actions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

var countDownTimer;
const Timer = () => {
  const [inputTime, setInputTime] = useState('');
  const dispatch = useDispatch();
  const timer = useSelector(state => state.timer);
  const router = new useRouter();
  
  const confirmTimer = function(e) {
    clearInterval(countDownTimer);
    if (inputTime > 60) return;
    else {
      dispatch(setTimer(parseFloat(inputTime)));
      const startTime = Date.now();
      countDownTimer = setInterval(() => {
        const nowTime = Date.now();
        const remainTime = Math.round(inputTime - ((nowTime - startTime) / 1000));
        // console.log('time: ', remainTime);
        dispatch(setTimer(remainTime));
        if (remainTime <= 0) {
          clearInterval(countDownTimer);
          // console.log("Time's up!");
          dispatch(setWinningPerson());
          router.push('/result');
        }
      }, 1000);
    }
  }
  return (
    <div>
      <TextField value={inputTime} id="time" label="抽獎時間" variant="outlined" size="small"
        onChange={(e)=>{setInputTime(e.target.value)}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccessAlarmIcon/>
            </InputAdornment>
          ),
          endAdornment: (<InputAdornment position="end">秒</InputAdornment>),
        }}
      />
      <Button variant="contained" color="primary" onClick={confirmTimer}>設定</Button>
      <div className="count-down">{moment(timer*1000).format('mm:ss')}</div>
      <style jsx>{`
        .count-down {
          font-size: 100px;
          color: red;
        }
      `}</style>
    </div>
  )
}

Timer.propTypes = {
  // timer: PropTypes.number.isRequired,
}

export default Timer;
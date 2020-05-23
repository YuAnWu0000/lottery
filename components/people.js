import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const People = () => {
  const peopleList = useSelector(state => state.peopleList);
  return (
    <div>
      <div className="title">抽獎名單</div>
      {peopleList.map(person => {
        return (
          <div key={person.id} className="card">
            <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {person.name[0]}
                </Avatar>
              }
              title={'姓名：' + person.name}
              subheader={'ID：' + person.id}
            />
            </Card>
          </div>
        )
      })}
      <style jsx>{`
        .title {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .card {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}

People.propTypes = {
  // peopleList: PropTypes.array.isRequired,
}

export default People;
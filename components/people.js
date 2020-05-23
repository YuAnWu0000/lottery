import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
// import { connect } from 'react-redux'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const People = () => {
  const classes = useStyles();
  const peopleList = useSelector(state => state.peopleList);
  return (
    <div>
      <div className="title">抽獎名單</div>
      {peopleList.map(person => {
        return (
          <div key={person.id} className="card">
            <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
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

// const mapStateToProps = (state, ownProps) => {
//   return {
//     peopleList: state.peopleList,
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//   }
// }

// const PeopleComponent = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(People)

export default People;
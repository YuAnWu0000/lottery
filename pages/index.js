import Head from 'next/head'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Timer from '../components/timer'
import People from '../components/people'
import store from '../redux/store'
import Container  from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Grid container>
          <Grid container item xs={12} sm={6}>
            <Timer></Timer>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <People></People>
          </Grid>
        </Grid>
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
        }
      `}</style>
    </Provider>
  )
}

import React from 'react';
import MyCard from './Mycard';
import Header from '../common/Header';
import { Grid, makeStyles, Theme } from '@material-ui/core';

const TopPage = () => {
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item sm={2}>
          <MyCard />
        </Grid>
      </Grid>
    </>
  );
};
export default TopPage;

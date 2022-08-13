import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

export default function HeaderLogin() {
  const classes = useStyles();

  return (
    <Typography variant='h4' align='center' className={classes.container}>
      login
    </Typography>
  );
}
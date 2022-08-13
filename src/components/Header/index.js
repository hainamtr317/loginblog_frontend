import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import UserDetails from '../../pages/userPage'

export default function Header() {
  const classes = useStyles();
  
  return (
   <div className={classes.container}>
     <Typography variant='h4' align='center'  >
      
      </Typography>
      <Typography variant='h4' align='center'  >
      Blog
      </Typography>
      <Typography variant='h4' align='center' >
       <UserDetails/>
      </Typography>
   </div>
  );
}
import React from 'react';
import ReactDOM from "react-dom";
import { FaTwitter,FaFacebook, FaLine, FaInstagram  } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    //   maxWidth: 500,
    marginLeft:100,
    marginRight:100,
    },
  });

  export default function TabComponent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab icon={<FaTwitter />}/>
          <Tab icon={<FaFacebook />}/>
          <Tab icon={<FaLine />}/>
          <Tab icon={<FaInstagram />}/>
        </Tabs>
      </Paper>
    );
  }
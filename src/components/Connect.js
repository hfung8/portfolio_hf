import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import SvgIcon from '@material-ui/core/SvgIcon';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

const styleContact = {
    fontFamily: 'Raleway',
    fontSize: 30
}

const styleEmail = {
    fontFamily: 'Raleway',
    fontSize: 19
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > svg': {
//         margin: theme.spacing(2),
//       },
//     },
//   }));
  
//   function GitHubIcon(props) {
//     return (
//       <SvgIcon {...props}>
//         <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//       </SvgIcon>
//     );
//   }
  

function Connect(){

    return(
    <div>
        <h1 style={styleContact}>Please feel free to contact me. I would love to hear from you!</h1>
        <Grid container direction="row" justify="space-evenly">
        <Grid item xs={4}>
        <h4 style={styleEmail}>General Email: harrison.hok.fung@gmail.com</h4>
        </Grid>
        <Grid item xs={4}>
        <ListItemLink href='https://www.linkedin.com/in/harrisonfung/'>
        <h4><LinkedInIcon style={{fontSize: 40}}/>LinkedIn</h4>
        </ListItemLink>
        </Grid>
        <Grid item xs={4}>
        <ListItemLink href="https://github.com/hfung8">
        <h4><GitHubIcon style={{fontSize: 40}}/>Github</h4>
        </ListItemLink>
        </Grid>
        </Grid>
    </div>
    )
}

export default Connect;
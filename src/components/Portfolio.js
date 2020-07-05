import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListItem from "@material-ui/core/ListItem";

function ListItemLink(props){
    return <ListItem button component='a' {...props} />;
}

const styleObj = {
    fontFamily: 'Monoton',
    color: '#a9a9a9',
    fontSize: 44,
    backgroundColor: '#ffb74d'
}

const styleProjects = {
    fontFamily: 'Raleway',
    fontSize: 30
}
const stylePortfolio = {
    fontFamily: 'Raleway',
    fontSize: 16
}

const stylePortfolioTitle = {
    fontFamily: 'Raleway',
    fontSize: 25,
    color: '#64b5f6'
}


function Portfolio(){

    return(
        <div>
            <div style={styleObj}>Portfolio</div>
            <Grid container>
            <Grid container item xs={4}>
                <h2 style={styleProjects}>To go to project, click on the project title</h2>
            </Grid>
            <Grid item xs={4}>
                <ListItemLink href="https://hfung8.github.io/OHU">
                <h2 style={stylePortfolioTitle}>ORPHANS OF HOPE UGANDA</h2>
                </ListItemLink>
                <p style={stylePortfolio}>Technologies used: CSS3: for design (from scratch), HTML5 for framework</p>
            </Grid>
            <Grid item xs={4}>
                <ListItemLink href="https://racingapp2.herokuapp.com/">
                <h2 style={stylePortfolioTitle}>OPEN WEATHER APP</h2>
                </ListItemLink>
                <p style={stylePortfolio}>Technologies used: React, Open Weather API. Created a weather tracker to list the forecast over the next 12 hours.</p>
            </Grid>
            <Grid item xs={4}>
                <ListItemLink href="https://hfung8.github.io/cards/">
                <h2 style={stylePortfolioTitle}>CARD GAME</h2>
                </ListItemLink>
                <p style={stylePortfolio}>Technologies used: CSS3, HTML5, JavaScript. Created a card rendering app</p>
            </Grid>
            <Grid item xs={4}>
                <ListItemLink href="https://sevensecondsapp.herokuapp.com/">
                <h2 style={stylePortfolioTitle}>SEVEN SECONDS</h2>
                </ListItemLink>
                <p style={stylePortfolio}>Technologies used: HTML, CSS, JavaScript, JQuery, Node JS and Heroku. Created landing, about, and biography pages (Biography page accessible after clicking first thumbnail). Used JavaScript to allow video to play when mouse enters thumbnail.</p>
            </Grid>
            <Grid item xs={4}>
                <ListItemLink href="https://stormy-peak-39689.herokuapp.com/#/">
                <h2 style={stylePortfolioTitle}>YUM CACHE</h2>
                </ListItemLink>
                <p style={stylePortfolio}>Technologies used: Google Places API. Wrote code to sync the Google Places API with app, allowing users to search for food pantries near searched locations.</p>
            </Grid>
            </Grid>
        </div>
    )
}

export default Portfolio;
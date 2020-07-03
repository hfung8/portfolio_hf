import React from 'react';
import Grid from '@material-ui/core/Grid';

function Portfolio(){

    return(
        <div>
            <h1>Portfolio</h1>
            <Grid container>
            <Grid item xs={4} container justify="center">
                <h2>ORPHANS OF HOPE UGANDA</h2>
                <p>Technologies used: CSS3: for design (from scratch), HTML5 for framework</p>
            </Grid>
            <Grid item xs={4} container justify="center">
                <h2>OPEN WEATHER APP</h2>
                <p>Technologies used: React, Open Weather API. Created a weather tracker to list the forecast over the next 12 hours.</p>
            </Grid>
            <Grid item xs={4} container justify="center">
                <h2>CARD GAME</h2>
                <p>Technologies used: CSS3, HTML5, JavaScript. Created a card rendering app</p>
            </Grid>
            <Grid item xs={4} container justify="center">
                <h2>SEVEN SECONDS</h2>
                <p>Technologies used: HTML, CSS, JavaScript, JQuery, Node JS and Heroku. Created landing, about, and biography pages (Biography page accessible after clicking first thumbnail). Used JavaScript to allow video to play when mouse enters thumbnail.</p>
            </Grid>
            <Grid item xs={4} container justify="center">
                <h2>YUM CACHE</h2>
                <p>Technologies used: Google Places API. Wrote code to sync the Google Places API with app, allowing users to search for food pantries near searched locations.</p>
            </Grid>




            </Grid>

        </div>
    )
}

export default Portfolio;
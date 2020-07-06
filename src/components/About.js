import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styleObj = {
    fontFamily: 'Monoton',
    color: '#40E0D0',
    fontSize: 44,
    backgroundColor: '#FFD700'
}

const styleAbout = {
    fontFamily: 'Raleway',
    fontSize: 25
}

class SoccerKick extends Component {
    render() {
        return (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ height: 50, width: 50 }}
          >
            <path d="M0 0h512v512H0z"></path>
            <path
              fill="#fff"
              d="M290.2 49.04c-15.7.1-32.3 13.83-38 35.81-6.5 25.15 4.7 47.85 22.1 52.35 17.4 4.5 38.2-9.9 44.7-35 6.5-25.16-4.6-47.82-22.1-52.33-2.2-.56-4.4-.84-6.7-.83zM89.04 68.3L77.5 87.31c32.4 15.99 63.1 33.49 96.4 46.49 9.5-3.8 18.8-7.8 28-12-40.2-15.4-76.7-33.69-112.86-53.5zm148.06 56.1c-47.8 25.4-97.9 41.6-153.64 61.1l8.08 16.4c51.96-16.1 111.26-32.9 161.16-56-6.9-5.5-12.1-12.9-15.6-21.5zm30.3 34.8c-22.5 10.8-46.8 20.2-71.4 28.7-20.3 45.6-27.7 94.9-36.8 140.1l-2.1 10.5-101.02-39.4-16.03 25.4 130.25 60.7c1-1.4 1.7-2.5 2.9-4.5 3.9-6.7 9.2-16.6 15.2-28.6 11.9-23.8 26.7-55.9 40.4-88.1 13.8-32.1 26.4-64.4 33.9-88.4 1.9-6.1 3.5-11.6 4.7-16.4zm-31.9 134.6c-5.5 12.5-11.1 24.8-16.5 36.3 25 37.4 57 79 94.9 109.2l23.3-17.6c-35.8-39.7-72.9-84.3-101.7-127.9zM423.9 367a48 48 0 00-48 48 48 48 0 0048 48 48 48 0 0048-48 48 48 0 00-48-48z"
            ></path>
          </svg>
        )
    }
}




function About(){

    return(
        <div>
            <div style={styleObj}><SoccerKick/>About Me<SoccerKick/></div>
            <Grid container justify="center">
                <Grid item xs={6} container>
                    <span style={styleAbout}>
                    I live in New York City and am originally from Toronto. I love to play soccer and am currently a player for the Broadway FC - part of Metro Soccer League of NY. My favorite team is Chelsea and my favorite player is Ricardo Kaka. I also enjoy playing basketball and play pick-up at 92Y pretty regularly. I love playing the guitar and singing -- a hobby of mine for the past 10 years, which started with my love of the Beatles. I learned piano at the Royal Conservatory of Music in Toronto.
                    </span>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;
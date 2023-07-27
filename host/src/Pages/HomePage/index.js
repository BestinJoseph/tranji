import React from 'react'

import useStyles from './HomePageStyles'
import { HomePageSlider, HomePageHistory, HomePageExpertise, HomePageProjects, HomePageReachOut, HomePageClients } from '../../Components/'

const HomePage = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.homePageContainer}>
            <HomePageSlider />
            <HomePageHistory />
            <HomePageExpertise />
            <HomePageProjects />
            <HomePageClients />
            <HomePageReachOut />
        </div>
    )
}

export default HomePage

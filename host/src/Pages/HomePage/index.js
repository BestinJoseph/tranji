import React from 'react'

import useStyles from './HomePageStyles'
import { HomePageSlider, HomePageHistory, HomePageExpertise, HomePageProjects, HomePageReachOut, HomePageClients } from '../../Components/'
import data from '../../database'

const HomePage = () => {
    const classes = useStyles()
    const { services, vendors, clients } = data
    
    return (
        <div className={classes.homePageContainer}>
            <HomePageSlider />
            <HomePageHistory />
            <HomePageExpertise services={services} vendors={vendors} />
            <HomePageProjects />
            <HomePageClients clients={clients} />
            <HomePageReachOut />
        </div>
    )
}

export default HomePage

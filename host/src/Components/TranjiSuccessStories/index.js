import React from 'react'

import useStyles from './TranjiSuccessStoriesStyels'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const TranjiSuccessStories = () => {
    const classes = useStyles()

    return (
        <div className={classes.services}>
            <div className={classNames('successStoriesProjects')}>
                <h1>TranJI SA Success Stories</h1>
                <p>Our success stories from different industries and product groups. Learn more about the projects’ specific requirements, their key details and the locations of their activities around the world.</p>
                <Link to="">About the Projects</Link>
            </div>
            <div className={classNames('successStoriesContacts')}>
                <h1>Conduct as at</h1>
                <p>Find the right NKT contacts for your region here.</p>
                <Link to="">Contact Us</Link>
            </div>
        </div>
    )
}

export default TranjiSuccessStories

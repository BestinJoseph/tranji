import React from 'react'

import useStyles from './AboutPageStyles'
import { AboutUsContent } from '../../Components'
import classNames from 'classnames'

const AboutPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.about}>
            <div className={classNames('aboutHeader')}>
                <div className={classNames('aboutHeaderContainer')}>
                    <h4>BUILDING FOR POSTERITY</h4>
                    <h1>About Us</h1>
                    <div className={classNames('aboutBreadCrum')}>
                        <h5>Home</h5>
                        <h5>History</h5>
                    </div>
                </div>
            </div>
            <AboutUsContent />
        </div>
    )
}

export default AboutPage

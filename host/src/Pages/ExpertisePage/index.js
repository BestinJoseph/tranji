import React from 'react'
import classNames from 'classnames'

import useStyles from './ExpertisePageStyles'
import { ExpertisePageBuilding, ExpertisePageMenu, ExpertisePageProjects } from '../../Components'

const ExpertisePage = () => {
    const classes = useStyles()

    return (
        <div className={classes.expretiseContainer}>
            <div className={classNames('expretiseHeader')}>
                <div className={classNames('expretiseHeaderContainer')}>
                    <h4>BUILDING BRILLIANCY</h4>
                    <h1>Expertise</h1>
                    <div className={classNames('expretiseBreadCrum')}>
                        <h5>Home</h5>
                        <h5>Expertise</h5>
                    </div>
                </div>
            </div>
            <ExpertisePageBuilding />
            <ExpertisePageMenu />
            <ExpertisePageProjects />
        </div>
    )
}

export default ExpertisePage
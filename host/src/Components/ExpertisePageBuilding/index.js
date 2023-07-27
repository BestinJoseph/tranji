import React from 'react'

import useStyles from './ExpertisePageBuildingStyles'
import classNames from 'classnames'

const ExpertisePageBuilding = () => {
    const classes = useStyles()

    return (
        <div className={classes.expertiseBuilding}>
            <div className={classNames('buildingsContainer')}>
                <div>
                    <img src="/images/othl.jpg" width="330" height="auto" />
                </div>
                <div>
                    <h4>Buildings</h4>
                    <h1>Building dreams in concrete</h1>
                    <div className={classNames('buildContents')}>
                        <p>Buildings are key measures of growth and development of a nation reflecting the living standards of its citizens.</p>
                        <p>NCC has been a major player in this area having contributed to construction including:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertisePageBuilding

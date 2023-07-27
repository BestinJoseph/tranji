import React from 'react'
import classNames from 'classnames'

import useStyles from './HomePageExpertiseStyles'

const HomePageExpertise = () => {
    const classes = useStyles()
    const expertise = [{ icon: '', expertIn: 'Buildings', content: ''}, { icon: '', expertIn: 'Water & Environment', content: ''}, { icon: '', expertIn: 'Transportation', content: ''}, { icon: '', expertIn: 'Railways', content: ''}]

    return (
        <div className={classes.expertiseContainer}>
            <div className={classNames('expertiseSubContainer')}>
                <h5>OUR EXPERTISE</h5>
                <h1>India's leading infrastructure conglomerate</h1>
                <div className={classNames('expertiseLists')}>
                    {
                        expertise.map( (expert, i) => (
                            <div className={classNames('expertItem')}>
                                <div className={classNames('expertItemIcon')}>{expert.icon}</div>
                                <h3>{expert.expertIn}</h3>
                                <p>{expert.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePageExpertise
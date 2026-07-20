import React, { use } from 'react'
import classNames from 'classnames'

import useStyles from './HomeWhyUsStyles'

const HomeWhyUs = () => {
    const classes = useStyles()

    return (
        <div className={classes.whyus}>
            <div className={classNames('whyUsImageContainer')}>
                <img src='./images/someWork.jpg' width={`100%`} height={`auto`} />
            </div>
            <div className={classNames('whyUsContentContainer')}>
                <div className={classNames('whyusContentItem')}>
                    <h4>why us?</h4>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley</p>
                    <a href='#'>Read more </a>
                </div>
            </div>
        </div>
    )
}

export default HomeWhyUs

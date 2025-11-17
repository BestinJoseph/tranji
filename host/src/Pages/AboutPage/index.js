import React from 'react'

import useStyles from './AboutPageStyles'
import { AboutUsContent } from '../../Components'
import classNames from 'classnames'
import { BootStrapHeader } from '../../utils'

const AboutPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.about}>
            <BootStrapHeader />
            <AboutUsContent />
        </div>
    )
}

export default AboutPage

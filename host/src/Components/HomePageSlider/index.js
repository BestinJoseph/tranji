import React from 'react'

import useStyles from './HomePageSliderStyles'

const HomePageSlider = () => {
    const classes = useStyles()

    return (
        <div className={classes.sliderContainer}>
            <h1>OJCE</h1>
            <h1>Trading</h1>
        </div>
    )
}

export default HomePageSlider
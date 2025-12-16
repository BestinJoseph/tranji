import React from 'react'

import useStyles from './HomePageSliderStyles'
import classNames from 'classnames'
// import videoBg from '../../../public/videos/video.mp4'

const HomePageSlider = () => {
    const classes = useStyles()

    return (
        <div className={classes.sliderContainer}>
            {/* <video src={`./videos/video.mp4`} autoPlay muted loop className={classNames('videoContent')} /> */}
            <img src={`/images/slider001.jpg`} className={classNames('sliderImage')} />
            <div className={classNames('sliderContent')}>
                <div className={classNames('sliderContentInner')}>
                    <div>
                        <h5>Proud to build tomorrow’s world</h5>
                        <h1>To guarantee efficient and prosperous projects</h1>
                        <h2>We collaborate closely with our clients to precisely decipher their dreams and visions, and then transform them into tangible reality through construction solutions</h2>
                    </div>
                    <button className={classNames('slideBtn')}>Demo Product</button>
                </div>
            </div>
        </div>
    )
}

export default HomePageSlider

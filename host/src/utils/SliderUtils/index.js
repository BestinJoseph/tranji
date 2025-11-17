import React, { useState } from 'react'

import useStyles from'./SliderUtilsStyles'
import data from '../../database'

const SlideUtils = () => {
    const classes  = useStyles()
    const [currentIndex, setCurrentIndex] = useState(0)
    const { slides } = data

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div>
            <div style={{ width: '580px', height: '300px', margin: '0 auto', }}>
                <div style={{ height: '100%', width: '100%', position: 'relative', }}>
                    <div onClick={goToPrevious} style={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', left: '32px', zIndex: 1, cursor: 'pointer', fontSize: '1.8rem', color: 'white', fontWeight: '900', }}>left</div>
                    <div style={{ backgroundImage: `url(./images/${slides[currentIndex].image})`, width: '100%', height: '100%', backgroundPosition: 'center', backgroundSize: 'cover', }}></div>
                    <div onClick={goToNext} style={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', right: '32px', zIndex: 1, cursor: 'pointer', fontSize: '1.8rem', color: 'white', fontWeight: '900', }}>right</div>
                </div>
            </div>
        </div>
    )
}

export default SlideUtils

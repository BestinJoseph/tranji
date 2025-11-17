import classNames from 'classnames';
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'

import useStyles from './LogSliderStyles'

const LogoSlider = ({ clients }) => {
    const classes = useStyles()
    const [slides, setSlides] = useState(clients)
    let sliderRef = useRef(null);
    var settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

    console.log(slides)

    return (
        <div className={classNames(classes.logoSlider, ["slider-container"])} >
            <Slider {...settings} ref={slider => { sliderRef = slider }}>
                {
                    slides && slides.map((client, i)=> {
                        return (
                            <div key={i}>
                                {/* <h1>{client.name}</h1> */}
                                <img src={`/images/clients/${client.logo}`} width={`200`} style={{ }}/>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default LogoSlider
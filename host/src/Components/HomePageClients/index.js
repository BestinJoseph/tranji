import React from 'react'
import classNames from 'classnames'
import Slider from 'react-slick'

import useStyles from './HomePageClientsStyles'
import LogoSlider from '../../utils/LogoSlider'

const HomePageClients = ({ clients }) => {
    const classes = useStyles()
    // const clients = [{name: '', logo: ''}, {name: '', logo: ''}, {name: '', logo: ''}, {name: '', logo: ''}, {name: '', logo: ''}]

    return (
        <div className={classNames(classes.clients)}>
            <div className={classNames('clientsContainer')}>
                <h5>OUR CLIENTS</h5>
                <h1>Trusted by 20+ Major Brands Kingdom of Saudi Arabia</h1>
                <LogoSlider clients={clients}/>
            </div>
        </div>
    )
}

export default HomePageClients

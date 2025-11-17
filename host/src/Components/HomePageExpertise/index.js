import React from 'react'
import classNames from 'classnames'

import useStyles from './HomePageExpertiseStyles'
import database from '../../database'
import { Link } from 'react-router-dom'

const HomePageExpertise = ({ services, vendors }) => {
    const classes = useStyles()

    if (!services) {
        return 'Loading...'
    }

    console.log(services)

    return (
        <div className={classes.expertiseContainer}>
            <div className={classNames('expertiseSubContainer')}>
                <div className={classNames('expertiseServiceContainer')}>
                    <h1>Services we provide in Saudi Arabia</h1>
                    <h5>tranji's relationships has diverse range of vendors and others provides in constuction industry with goal of deep and longtime</h5>
                    <div className={classNames('expertiseLists')}>
                        {
                            services.map( (expert, i) => (
                                <div className={classNames('expertItem')} key={i} style={{ cursor: 'pointer', }}>
                                    <div className={classNames('expertItemIcon')}>{}</div>
                                    <div>
                                        <p style={{ lineHeight: 1.35, }}><span style={{ fontWeight: 900, color: '#0e1f4d' }}>{expert.name}</span>: {expert.subContent }</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classNames("expertiseAvailabilitySection")}>
                    <div className={classNames('expertiseAvailabilityTitleSection')}>
                        <h1>tranji's relationships has diverse range of vendors and others provides</h1>
                        <Link className={classNames('expertiseAvailLink')} to="">Get our preq for more informations</Link>
                    </div>
                    <div className={classNames('expertiseAvailbityContentSection')}>
                        {
                            vendors && vendors.map( (vendor, i) => (
                                <div className={classNames('availabilityContentItems')} key={i}>
                                    <div className={classNames('availabilityContentItemContent')}>
                                        <p>{ vendor.name }</p>
                                        <h1>{`${vendor.name} Vendor ID: ${vendor.code}`}</h1>
                                    </div>
                                    <div className={classNames('vendorImageContainer')}>
                                        <img src={`/images/vendors/${vendor.logoUrl}.svg`} width={`200`} height={`100`} className={classNames('vendorImage')} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageExpertise
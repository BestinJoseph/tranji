import React from 'react'

import useStyles from './ExpertisePageBuildingStyles'
import classNames from 'classnames'
import data from '../../database'
import { Link } from 'react-router-dom'

const ExpertisePageBuilding = ({ clients }) => {
    const classes = useStyles()
    const services = data.services

    return (
        <div className={classes.expertiseBuilding}>
            <div className={classNames('buildingsContainer')}>
                <div className={classNames('expertiseBuildingContainer')}>
                    {/* <h4>OUR SERVICES</h4> */}
                    <h1 className={classNames('expertiseTitle')}>we construct sustainable and powerful world</h1>
                    {/* <div className={classNames('buildContents')}>
                        <p style={{ fontSize: '1.20rem', }}>Tranji SA flexible and reliable solutions bring power to interconnections, hydro-electric and nuclear power plants, as well as onshore and offshore wind farms, oil and gas platforms and solar energy. We pride ourselves on delivering sustainable solutions for a lifetime and for generations to come.</p>
                    </div> */}
                </div>
                <div className={classNames('expertiseClients')}>
                    <h3 style={{ marginRight: '2rem', color: '#6cbe46', }}>Trusted by:</h3>
                    {
                        clients && clients.map((serv, i) => {
                            if(i < 4) {
                                return (
                                    (
                                        <div key={i} className={classNames('expertiseClientsItem')} >
                                            <img src={`/images/clients/${serv.logo}`} width={`80%`}/>
                                        </div>
                                    )
                                )
                            }
                        })
                    }
                    <Link to="/partner" className={classNames('expertiseClientsMoreBtn')} >More</Link>
                </div>
            </div>
        </div>
    )
}

export default ExpertisePageBuilding

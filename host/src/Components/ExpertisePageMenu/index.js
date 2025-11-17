import React, { useEffect, useState } from 'react'

import useStyles from './ExpertisePageMenuStyles'
import classNames from 'classnames'

const ExpertisePageMenu = ({ services, setSelectedServices }) => {
    const classes = useStyles()
    const [selected, setSelected] = useState({})

    useEffect(()=>{
        setSelected(services[0])
    }, [services])

    // console.log(services)
    const handleSetServices = (ser) => {
        setSelected(ser)
    }

    if(!selected) return false

    // console.log(selected)

    return (
        <div className={classes.expertiseMenu}>
            <div className={classNames('serviceListsContainer')}>
                <h1 className={classNames('servicesListsTitle')}>WE OFFER EXPERTISE IN THE FOLLOWING AREAS:</h1>
                <div className={classNames('serviceListsInnerContainer')}>
                    {
                        services && services.map((ser, i) => (
                            <li key={i} className={classNames('serviceListsItem')}>{ ser.name }</li>
                        ))
                    }
                </div>
            </div>
            {/* <div style={{ maxWidth: '1080px', margin: '0 auto 3rem auto', }}>
                <h1>Our Services</h1>
                <h3 style={{ fontWeight: 'lighter'}}>From civil - Mechanical, find the right service for your needs</h3>
            </div> */}
            <div className={classNames('menuContainer')}>
                <div className={classNames('menuSubContainer')}>
                    {
                        services.map((menu, i) => (
                            <div key={i} className={classNames(`menuItems`)} onClick={() => handleSetServices(menu)}>
                                <div className={classNames(`menuItemsContent ${ selected.name === menu.name ? "active" : ''}`)}>
                                    <p>{ menu.name }</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classNames('serviceExplainedSection')}>
                <div className={classNames('serviceExplainedInnerContainer')}>
                    <h1 className={classNames('serviceExplainerTitle')}>{ selected && selected.subContent }</h1>
                    <p className={classNames('serviceExplainerSubTitle')}>{ selected && selected.content }</p>
                    <ul className={classNames('serviceExplainerListsContainer')}>
                        { selected && selected.types?.map((type, i) => (
                            <li className={classNames('serviceExplainerListsItem')}>+ { type }</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertisePageMenu

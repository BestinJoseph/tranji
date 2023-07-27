import React from 'react'
import classNames from 'classnames'

import useStyles from './HomePageClientsStyles'

const HomePageClients = () => {
    const classes = useStyles()
    const clients = [{name: '', logo: ''}, {name: '', logo: ''}, {name: '', logo: ''}, {name: '', logo: ''}, {name: '', logo: ''}]

    return (
        <div className={classNames(classes.clients)}>
            <div className={classNames('clientsContainer')}>
                <h5>OUR CLIENTS</h5>
                <h1>India's leading infrastructure conglomerate</h1>
                <div className={classNames('clients')}>
                    {
                        clients.map((client, i)=>(
                            <div className={classNames('clientItem')}>{client.name}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePageClients

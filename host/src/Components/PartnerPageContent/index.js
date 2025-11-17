import React from 'react'
import classNames from 'classnames'

import useStyles from './PartnerPageContentStyles'
import data from '../../database'

const PartnerPageContent = () => {
    const classes = useStyles()
    const { clients, vendors } = data
    const statics = [{ percent: '3.7%', title: 'Average Increase in Margins' }, { percent: '49%', title: 'More Work Managed by Project Teams' }, { percent: '90%', title: 'See Better Site-to-Office Communication' }]
    
    return (
        <div className={classes.partner}>
            <div style={{ width: '100%', marginBottom: '4rem', }}>
                <div style={{ width: '35vw', margin: '0 auto 3rem auto', textAlign: 'center', }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', }}>Resources for Success starts with choosing great relationship</h1>
                    <p style={{ fontSize: '1.15rem', }}>Your business is successful—why mess with it? Because achieving success shouldn't be this hard, it should pay even better, and Procore customers see results.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '1rem', }}>
                    {
                        statics && statics.map( (stat, i) => (
                            <div key={i} style={{ textAlign: 'center', }}>
                                <h1 style={{ fontSize: '6.5rem', }}>{ stat.percent }</h1>
                                <h4 style={{ fontSize: '1.5rem', }}>{ stat.title }</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classNames('partnerContainer')}>
                <div style={{ width: '35vw', margin: '0 auto 3rem auto', textAlign: 'center', }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', }}>Major clients we work with,</h1>
                </div>
                <div className={classNames('partnerSubContainer')}>
                    {
                        clients && clients.map( (client, i) => (
                            <div className={classNames('partnerItemsImageContainer')} key={i}>
                                <img src={`./images/clients/${client.logo}`} width="100%" className={classNames('partnerItemsImage')} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PartnerPageContent

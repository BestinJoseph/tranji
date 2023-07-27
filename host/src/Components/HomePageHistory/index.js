import React from 'react'
import classNames from 'classnames'

import useStyles from './HomePageHistoryStyles'

const HomePageHistory = () => {
    const classes = useStyles()
    const history = [{name: "Building Projects", count: '490+'}, {name: "Water Pipelines", count: '20,000 + KMS.'}, {name: "Land Irrigated", count: '350,000 + ACRES'}, {name: "Villages Electrified", count: '35,000 +'}, {name: "Employees", count: '11,000 +'}]
    return (
        <div className={classes.historyContainer}>
            <div className={classNames('historySubContainer')}>
                <p style={{ marginBottom: '1rem', }}>A LEGACY OF TRANSFORMATION</p>
                <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem', }}>Over 4 decades of infra-excellence</h1>
                <div className={classNames('historyContent')}>
                    <div>
                        <img src="/images/aboutus.png" alt="who we are" width="300" height="" />
                    </div>
                    <div style={{ widht: '30%'}}>
                        <p>Tran Ji Trading & Contracting company is Saudi owned and managed company registered under the laws of the Kingdom. We offers Construction works in all possible fields including Electro Mechanical Testing and Commissioning, Manpower Supplies & Material Supply. Our dedication to Safety and Quality policy of our customer’s and our own policies give us a chance to improvise ourselves. “Safety First” for all employees is embedded in our company culture from top to bottom. Our area of expertise includes building technology, civil and structural engineering.</p>
                    </div>
                </div>
                <div className={classNames('historyStats')}>
                    {
                        history.map((hist, i) => (
                            <div className={classNames('historyStatsItem')}>
                                <h1 className={classNames('historyStatCount')}>{hist.count}</h1>
                                <h5>{hist.name}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePageHistory
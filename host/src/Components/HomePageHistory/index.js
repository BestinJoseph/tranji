import React from 'react'
import classNames from 'classnames'

import useStyles from './HomePageHistoryStyles'
import { useNavigate } from 'react-router-dom'

const HomePageHistory = () => {
    const classes = useStyles()
    const history = [{name: "Substation & Transmission Line", imageUrl: 'othl'}, {name: "Commercial Building Constructions", imageUrl: 'commercial'}, {name: "Projects Drafting services", imageUrl: 'drafting'}, {name: "Solar PV Projects", imageUrl: 'solar'}]
    const navigate = useNavigate()
    
    const handleNavigationServices = (nav) => {
        console.log(nav)
        navigate('/expertise')
    }

    return (
        <div className={classes.historyContainer}>
            <div className={classNames('historySubContainer')}>
                <p style={{ fontSize: '1.25rem', marginBottom: '.5rem', fontWeight: '600', textTransform: 'uppercase', }}>Tranji provides</p>
                <h1 className={classNames('historyHeader')}>Easy solution for complicated construction projects</h1>
                <div className={classNames('historyContent')}>
                    <div className={classNames('historyContentInner')}>
                        <p className={classNames('contentText')}>Our commitment to adhering to both our customers' Safety and Quality rules, as well as our own, provides us with an opportunity to continuously improve ourselves. Ensuring the safety of all employees is deeply ingrained in our business culture, permeating every level of the organization.</p>
                    </div>
                </div>
                <div className={classNames('historyStats')}>
                    {
                        history.map((hist, i) => (
                            <div onClick={() => handleNavigationServices(hist)} className={classNames('historyStatsItem')} key={i}>
                                <img src={`/images/${hist.imageUrl}.jpg`} alt="cool" width={`100%`} className={ classNames("historyImage")} />
                                <h5 className={classNames('historyStatText')}>{hist.name}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePageHistory

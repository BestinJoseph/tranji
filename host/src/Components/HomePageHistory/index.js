import React from 'react'
import classNames from 'classnames'

import useStyles from './HomePageHistoryStyles'
import { useNavigate } from 'react-router-dom'

const HomePageHistory = () => {
    const classes = useStyles()
    // const history = [{name: "Substation & Transmission Line", imageUrl: 'othl'}, {name: "Commercial Building Constructions", imageUrl: 'commercial'}, {name: "Projects Drafting services", imageUrl: 'drafting'}, {name: "Solar PV Projects", imageUrl: 'solar'}]
    const history = [{name: "Advisory", content: 'Help design, construct, and maintain safe & efficient power delivery networks'}, 
        {name: "Assurance", content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, the librarian at St Bride Printing Library'}, 
        {name: "Reliability", content: 'It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.'}]
    const navigate = useNavigate()
    
    const handleNavigationServices = (nav) => {
        console.log(nav)
        navigate('/expertise')
    }

    return (
        <div className={classes.historyContainer}>
            <div className={classNames('historySubContainer')}>
                <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '600', color: '#3c54a4',}}>About Tranji</p>
                {/* <h1 className={classNames('historyHeader')}>Easy solution for complicated construction projects</h1> */}
                <div className={classNames('historyContent')}>
                    <div className={classNames('historyContentInner')}>
                        <p className={classNames('contentText')}>Our commitment to adhering to both our customers' Safety and Quality rules, as well as our own, provides us with an opportunity to continuously improve ourselves. Ensuring the safety of all employees is deeply ingrained in our business culture, permeating every level of the organization.</p>
                    </div>
                </div>
                <div className={classNames('historyStats')}>
                    {
                        history.map((hist, i) => (
                            <div onClick={() => handleNavigationServices(hist)} className={classNames('historyStatsItem')} style={{  }} key={i}>
                                <div style={{ padding: '2rem', }}>
                                    <h3 style={{ marginBottom: '1.5rem'}}>{hist.name}</h3>
                                    <p style={{ lineHeight: '1.5rem'}}>{hist.content}</p>
                                </div>
                                {/* <img src={`/images/${hist.imageUrl}.jpg`} alt="cool" width={`100%`} className={ classNames("historyImage")} /> */}
                                {/* <h5 className={classNames('historyStatText')}>{hist.name}</h5> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePageHistory

import React from 'react'
import classNames from 'classnames'

import useStyles from './AboutUsContentStyles'

const AboutUsContent = () => {
    const classes = useStyles()
    const requirements = [{ name: 'VISION', content: ['To be a world-class construction and infrastructure enterprise committed to quality, timely completion, customer satisfaction, continuous learning and enhancement of stakeholders']}, { name: 'MISSION', content: ['To build a strong future ensuring increased returns to shareholders and enhanced support to associates.','To adopt the latest technologies in the fields of engineering, construction, operation and maintenance of infrastructure projects.','To encourage innovation, professional integrity, upgradation of knowledge and skills of employees and a safe working environment.','To be a responsible corporate citizen committed to the social cause.']}, { name: 'VALUES', content: ['']}]

    return (
        <div className={classes.aboutContent}>
            <div className={classNames('aboutContentContainer')}>
                <h4>About Us Content</h4>
                <h1>Driven by visionary values</h1>
                <p>Taking forward the values and ethics envisioned by the Founder Chairman, Padma Shri awardee Dr. AVS Raju, the group’s culture is clearly spelt out in the Vision and Mission statements.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', }}>
                    <div className={classNames('aboutItems')}>
                        {
                            requirements.map((req, i) => (
                                <div key={i} className={classNames('aboutValueItem')}>
                                    <div></div>
                                    <div className={classNames('aboutValueItemSingle')}>
                                        <h3>{ req.name }</h3>
                                        { req.content.map((cont, j) => (
                                            <p key={j}>{ cont }</p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div style={{  }}>
                        <img src="/images/aboutus.png" width="400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent

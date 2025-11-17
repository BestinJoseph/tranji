import React from 'react'
import classNames from 'classnames'

import useStyles from './AboutUsContentStyles'
import data from '../../database'

const AboutUsContent = () => {
    const classes = useStyles()
    const requirements = []
    const { about, mission, vision, whowe, difference } = data.about

    if(!data.about) {
        return 'Loading...'
    }

    return (
        <div className={classes.aboutContent}>
            <div className={classNames('aboutContentContainer')}>
                <h4>{ about?.title }</h4>
                <h1>{ about?.subContent }</h1>
                <div className={classNames('aboutUsContainer')}>
                    {
                        about && about.info?.map((inf, i) => (
                            <p key={i}>{inf}</p>
                        ))
                    }
                </div>
                <div className={classNames('aboutUsMissionVision')} >
                    <div>
                        <h1>{vision.name }</h1>
                        { 
                            vision.content.map( (mis, i) => (
                                <p key={i} style={{ lineHeight: '1.5rem', }}>{ mis }</p>
                            ))
                        }
                    </div>
                    <div className={classNames('missionSection')}>
                        <h1>{mission.name }</h1>
                        { 
                            mission.content.map( (mis, i) => (
                                <p key={i} style={{ lineHeight: '1.5rem', }}>{ mis }</p>
                            ))
                        }
                    </div>
                </div>
                <div className={classNames('whoWeAre')}>
                    <div>
                        <h1>{ whowe.name }</h1>
                        {
                            whowe.content.map((who, i) => (
                                <p style={{ lineHeight: '1.5rem', marginBottom: '1rem' }} key={i}>{ who }</p>
                            ))
                        }
                    </div>
                    <div className={classNames('tranjiLogo')}>
                        <img src="./images/tranji.png" style={{ width: '60%', height: 'auto', }} />
                    </div>
                </div>
                <div style={{ marginTop: '5rem', }}>
                    <h1>{ difference.name}</h1>
                    {
                            difference.content.map((dif, i) => (
                                <p style={{ lineHeight: '1.5rem', marginBottom: '1rem' }} key={i}>{ dif }</p>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent

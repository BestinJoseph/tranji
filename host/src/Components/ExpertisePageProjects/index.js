import React from 'react'

import useStyles from './ExpertisePageProjectsStyles'
import classNames from 'classnames'

const ExpertisePageProjects = ({ service }) => {
    const classes = useStyles()
    const projects = [{type: 'Hospitals & medical colleges', proPic: '', lists: ["AIIMS at Bibinagar", "APMSIDC at Vijayanagaram","Dept. of Medical Education & Research", "Govt. Medical College at Madhubani"]}]

    if(!service) {
        return 'Loading.....'
    }

    return (
        <div className={classes.expertiseProjects}>
            <div className={classNames('projectsContainer')}>
                <h1>{ service.name }</h1>
                <div className={classNames('projectLists')}>
                    {
                        service.types.map((serv, i) => (
                            <div key={i}>
                                <div>
                                    <h3 style={{ marginBottom: '1rem', textTransform: 'capitalize', }}>{serv}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ExpertisePageProjects

import React from 'react'

import useStyles from './ExpertisePageProjectsStyles'
import classNames from 'classnames'

const ExpertisePageProjects = () => {
    const classes = useStyles()
    const projects = [{type: 'Hospitals & medical colleges', proPic: '', lists: ["AIIMS at Bibinagar", "APMSIDC at Vijayanagaram","Dept. of Medical Education & Research", "Govt. Medical College at Madhubani"]}]

    return (
        <div className={classes.expertiseProjects}>
            <div className={classNames('projectsContainer')}>
                <h1>Completed Projects</h1>
                <div className={classNames('projectLists')}>
                    {
                        projects.map((proj, i) => (
                            <div key={i}>
                                <div></div>
                                <div>
                                    <h1>{proj.type}</h1>
                                    {
                                        proj.lists.map((list, j)=>(
                                            <div>{ list }</div>
                                        ))
                                    }
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

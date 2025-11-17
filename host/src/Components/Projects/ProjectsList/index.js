import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import useStyles from './ProjectsListStyles'
import data from '../../../database'

const ProjectsList = () => {
    const classes = useStyles()
    const [pro, setPro] = useState({ modal: false, project: {}})
    const proTypes = ["all", "on-going", "completed"]
    const [getPro, setGetPro] = useState(data.projects)

    useEffect(()=>{
        // setGetPro()
    },[getPro])

    const handleProjectTypes = (type) => {
        let projects = []
        switch (type) {
            case "all":
                return setGetPro(data.projects)
            case "on-going":
                projects = data.projects.filter( gpro => gpro.endDate === "" )
                return setGetPro(projects)
            case "completed":
                projects = data.projects.filter( gpro => gpro.endDate !== "" )
                return setGetPro( projects)
            default:
                return setGetPro
        }
    }

    const handleProjectClick = (val) => {
        setPro({ modal: true, project: val })
    }

    const handleProjectClose = () => {
        setPro({ modal: false, project: {} })
    }

    return (
        <div className={classes.projects}>
            <div className={classNames('projectListsContainer')}>
                <ul className={classNames('projectMenu')}>
                    {
                        proTypes && proTypes.map((pro, i)=>(
                            <li key={i} style={{}} onClick={() => handleProjectTypes(pro)}>{ pro }</li>
                        ))
                    }
                </ul>
                <div className={classNames('projectList')}>
                    {
                        getPro && getPro.map((proj, i) => (
                            <div className={classNames('projectItem')} key={i} onClick={() => handleProjectClick(proj)}>
                                <div className={classNames('projectItemImageContainer')} >
                                    <img src={`./images/${proj.images[0].url}`} alt={proj.name} className={classNames('projectItemImage')} />
                                </div>
                                <div className={classNames('projectItemText')}>
                                    <h5>{ proj.name }</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                pro.modal && <div className={classNames('projectsModal')}>
                    <div className={classNames('projectModalContainer')}>
                        <p onClick={handleProjectClose} className={classNames('projectModalCloseBtn')}>CLOSE</p>
                        <div className={classNames('modalContentContainer')}>
                            <h3 className={classNames('status')}>{ pro.project && pro.project.endDate === "" ? 'On-Going' : 'Completed' }</h3>
                            <h1>{ pro.project && pro.project.name }</h1>
                            <h2>{ pro.project && pro.project.client }</h2>
                            <p className={classNames('projectDesc')}>{ pro.project && pro.project.description }</p>
                            <p>{ pro.project && pro.project.startDate }</p>
                            <p>{ pro.project && pro.project.endDate }</p>
                        </div>
                        <div className={classNames('modalProjectImageContainer')}>
                            {
                                pro.project && pro.project.images.map((im, j)=>(
                                    <img src={`./images/${im.url}`} alt="project images" className={classNames('modalProjectImage')} key={j}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectsList

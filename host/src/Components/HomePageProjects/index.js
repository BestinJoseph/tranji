import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import useStyles from './HomePageProjectsStyles'
import { Link } from 'react-router-dom'
import data from '../../database'

const HomePageProjects = () => {
    const classes = useStyles()
    // const projects = [{ url :'/images/mechanical.jpg', name: 'Outdoor Transition area 380kV Gantry/SA/CT foundation construction works.'}, { url :'/images/water.jpg', name: '380kV OHTL DC Circuit civil construction, erection and stringing works'}, { url :'/images/electrical.jpg', name: 'Pre Commissioning activity for 380 & 110kV control and protection Panels'}, { url :'/images/mechanical.jpg', name: 'Outdoor Transition area 380kV Gantry/SA/CT foundation construction works.'}]
    const [modal, setModal] = useState(false)
    const [project, setProject] = useState({})

    const handleModal = (proj) => {
        setProject(proj)
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
        setProject({})
    }

    console.log(data)

    if(!data.projects) return false

    return (
        <div className={classes.projectsContainer}>
            <div className={classNames('projectsSubContainer')}>
                <div className={classNames('projectHeaderSection')}>
                    <h1>Some of our ongoing Projects</h1>
                    <Link to="/project" className={classNames('projectMoreLink')}>browse all project</Link>
                </div>
                <div className={classNames('projectLists')}>
                    {
                        data && data.projects?.map((project, i) => {
                            if(i < 4) {
                                return (
                                    <div  className={classNames('projectItem')} key={i}>
                                        <div className={classNames('projectItemImageContainer')}>
                                            <img src={`/images/${project.images[0].url}`} width={`100%`} alt="nice" />
                                        </div>
                                        <div className={classNames('projectItemContent')} >
                                            <div className={classNames('projectItemName')}>{ project.name}</div>
                                            <div className={classNames('projectItemClientName')}>{ project.client }</div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className={classNames('modalCss')} style={{ display: modal ? 'block' : 'none' }}>
                <p onClick={() => handleCloseModal()} style={{ cursor: 'pointer', }}>Close</p>
                <div className={classNames('modalCssContainer')}>
                    <div>left</div>
                    <div className={classNames('modalImageContainer')}>
                        <img src={project.url} width="100%" height="auto" />
                    </div>
                    <div>Right</div>
                </div>
            </div>
        </div>
    )
}

export default HomePageProjects

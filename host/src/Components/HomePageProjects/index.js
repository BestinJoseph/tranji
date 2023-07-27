import React from 'react'
import classNames from 'classnames'

import useStyles from './HomePageProjectsStyles'

const HomePageProjects = () => {
    const classes = useStyles()
    const projects = [{ url :'/images/mechanical.jpg', name: 'buildings'}, { url :'/images/water.jpg', name: 'Water & Environment'}, { url :'/images/electrical.jpg', name: 'electrical'}]

    return (
        <div className={classes.projectsContainer}>
            <div className={classNames('projectsSubContainer')}>
                <h5>PROJECTS SHOWCASE</h5>
                <h1>Key Projects</h1>
                <div className={classNames('projectLists')}>
                    {
                        projects.map((project, i) => (
                            <div className={classNames('projectItem')} key={i}>
                                <img src={project.url} alt={ project.name} width="100%" />
                                <div className={classNames('projectItemName')}>{ project.name}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePageProjects
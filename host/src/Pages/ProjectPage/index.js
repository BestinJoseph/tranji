import React from 'react'
import classNames from 'classnames'

import useStyles from './ProjectPageStyles'
import BootStrapHeader from '../../utils/BootStrapHeader'
import { ProjectsList } from '../../Components/Projects'

const ProjectPage = () => {
    const classes = useStyles()
    const projects = []

    return (
        <div className={classes.project}>
            <BootStrapHeader />
            <ProjectsList projects={projects} />
        </div>
    )
}

export default ProjectPage

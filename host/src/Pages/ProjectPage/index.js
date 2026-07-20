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
            {/* <BootStrapHeader /> */}
            <div style={{ padding: '8rem 0 0', width: '1172px', margin: '0 auto', }}>
                <div>
                    Home - Sectors - Projects
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4rem', }}>
                    <div style={{ width:'60%'}}>
                        <h1>Projects</h1>
                        <p>Please find out more aout some of the fantastic projects we have been involved with</p>
                    </div>
                    <div>
                        <select>
                            <option>Sector</option>
                            <option>OTHL</option>
                            <option>Substation Electrical</option>
                            <option>Substation Civil</option>
                            <option>Testing & Commissioning</option>
                        </select>
                    </div>
                </div>
            </div>
            <ProjectsList projects={projects} />
        </div>
    )
}

export default ProjectPage

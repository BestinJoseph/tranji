import React, { useState } from 'react'
import classNames from 'classnames'

import useStyles from './ExpertisePageStyles'
import { ExpertisePageBuilding, ExpertisePageMenu, ExpertisePageProjects, TranjiSuccessStories } from '../../Components'
import data from '../../database'
import { BootStrapHeader } from '../../utils'

const ExpertisePage = () => {
    const classes = useStyles()
    const [selectedService, setSelectedServices] = useState(data.services[0])
    const { clients, services } = data

    if(!services) {
        return 'Loading...'
    }

    return (
        <div className={classes.expretiseContainer}>
            <BootStrapHeader />
            <ExpertisePageBuilding clients={clients} />
            <ExpertisePageMenu services={services} setSelectedServices={setSelectedServices} />
            {/* <ExpertisePageProjects service={ selectedService } /> */}
            <TranjiSuccessStories />
        </div>
    )
}

export default ExpertisePage

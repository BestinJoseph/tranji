import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import classNames from 'classnames'

import useStyles from './BootStrapHeaderStyles'

const BootStrapHeader = () => {
    const classes = useStyles()
    const { pathname } = useLocation()

    console.log()

    return (
        <div className={classes.bootstarp}>
            <div className={classNames('bootStrapHeader')}>
                <div className={classNames('bootStrapHeaderContainer')}>
                    <h4>CONNECT TO EXCELLENCE</h4>
                    <h1 style={{ textTransform: 'capitalize', }}>{ pathname.replace(/[^A-Za-z]/g, '') }</h1>
                    <div className={classNames('bootStrapBreadCrum')}>
                        <h5>Home</h5>
                        <h5 style={{ textTransform: 'capitalize', }}>{pathname.replace(/[^A-Za-z]/g, '')}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BootStrapHeader

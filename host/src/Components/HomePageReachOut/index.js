import React from 'react'
import classNames from 'classnames'
import { Formik, Form, Field } from 'formik'
import { Button, TextField } from '@mui/material'

import useStyles from './HomePageReachOutStyles'

const HomePageReachOut = () => {
    const classes = useStyles()
    const initialValues = { fullName: '', phone: '', email: '', message: ''}

    const handleSubmit = (values, actions ) => {
        console.log( values )
    }

    return (
        <div className={classes.reachOutContainer}>
            <div className={classNames('reachOutSubContainer')}>
                <div className={classNames('reachoutText')}>
                    <h1>Traji Sa is ready to quote your tomorrow vision</h1>
                    <h5>Contact Us</h5>
                </div>
                <div className={classNames('reachOutContext')}>
                    {/* <div className={classNames('brochureList')}>
                        <div className={classNames('corporate')}>
                            <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', }}>
                                <h3 style={{ padding: '1rem 0 0 1rem', }}>Corporate <br /> Brochure</h3>
                                <div />
                                <p style={{ padding: '0 0 1rem 1rem', cursor: 'pointer', }}>download</p>
                            </div>
                            <div style={{ height: 'auto', }}>
                                <img src="/images/brochure.jpg" alt="" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HomePageReachOut

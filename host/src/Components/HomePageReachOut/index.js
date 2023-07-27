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
                <h5>Contact Us</h5>
                <h1>Reach out to excellence</h1>
                <div className={classNames('reachOutContext')}>
                    <div className={classNames('reachOutForm')}>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                            {({ values }) => (
                                <Form>
                                    <div className={classNames('reachOutSubForm')}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '1rem', }}>
                                            <div><Field name="fullName" type="text" className={classNames('reachOutFormField')} /></div>
                                            <div><Field name="phone" type="text" className={classNames('reachOutFormField')} placeholder="Phone Number" /></div>
                                        </div>
                                        <div>
                                            <Field name="email" type="text" className={classNames('reachOutFormField')} />
                                        </div>
                                        <div><Field name="message" as="textarea" rows="10" cols="90" className={classNames('reachOutFormField')} /></div>
                                        <button type="submit" className={classNames('reachOutFormBtn')} >Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className={classNames('brochureList')}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageReachOut

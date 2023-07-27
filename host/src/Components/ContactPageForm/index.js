import React from 'react'

import useStyles from './ContactPageFormStyles'
import { Field, Form, Formik } from 'formik'
import classNames from 'classnames'

const ContactPageForm = () => {
    const classes = useStyles()
    const initialValues = { fullName: '', email: '', phone: '', message: '' }

    const handleSubmit = (values, { resetForm }) => {
        console.log(values)
        resetForm()
    }

    return (
        <div className={classes.contact}>
            <div className={classNames('contactContainer')}>
                <div className={classNames('contactLocation')}>
                    <div className={classNames('locationHeader')}>
                        <h4>CONTACT US</h4>
                        <h2>Corporate Office</h2>
                    </div>
                    <div className={classNames('lcoationAddress')}>
                        <h6>NCC House, Madhapur Hyderabad - 500081 Telangana, India</h6>
                        <h6>+91 40 2326 8888</h6>
                        <h6>info@trange.sa</h6>
                    </div>
                </div>
                <div className={classNames('contactFormContainer')}>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        {({ values })=>(
                            <Form>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '1rem', }}>
                                    <Field name="fullName" type="text" placeholder="Enter Full Name" className={classNames('textField')} />
                                    <Field name="phone" type="text" placeholder="Enter Phone Number" className={classNames('textField')} />
                                </div>
                                <Field name="email" type="text" placeholder="Enter Email" className={classNames('textField')} />
                                <Field name="message" as="textarea" placeholder="Enter Message" rows="7" cols="53" className={classNames('textField')} />
                                <button type='submit' className={classNames('submitBtn')}>Send Queries</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ContactPageForm
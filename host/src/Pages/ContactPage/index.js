import React from 'react'
import { ContactPageForm } from '../../Components'

import useStyles from './ContactPageStyles'
import classNames from 'classnames'

const ContactPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.contactContainer}>
            <div className={classNames('contactHeader')}>
                <div className={classNames('contactHeaderContainer')}>
                    <h4>CONNECT TO EXCELLENCE</h4>
                    <h1>Contact</h1>
                    <div className={classNames('contactBreadCrum')}>
                        <h5>Home</h5>
                        <h5>Contact</h5>
                    </div>
                </div>
            </div>
            <ContactPageForm />
        </div>
    )
}

export default ContactPage

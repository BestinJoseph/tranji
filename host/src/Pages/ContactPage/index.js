import React from 'react'
import classNames from 'classnames'

import useStyles from './ContactPageStyles'
import { BootStrapHeader } from '../../utils'
import { ContactPageForm } from '../../Components'

const ContactPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.contactContainer}>
            <BootStrapHeader />
            <ContactPageForm />
        </div>
    )
}

export default ContactPage

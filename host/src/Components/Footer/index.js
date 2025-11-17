import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import useStyles from './FooterStyles'

const Footer = () => {
    const classes = useStyles()
    const contacts = ["Building # 5248, King Saud Branch Road, 6382, Al Muhammadiyah Dist. - P.O Box 32432 - Dammam", "+966 50 636 5392", "info@trange.sa"]

    return (
        <div className={classes.footerContainer}>
            <div className={classnames('footerSubContainer')}>
                <div className={classnames('footerTopSection')}> 
                    <div className={classnames('footerIntro')}>
                        <h4>Tran Ji LLC</h4>
                        <p></p>
                    </div>
                    <div className={classnames('footerLinksContainer')}>
                        <h3>Quick Links</h3>
                        <ul className={classnames('footerLinks')}>
                            <li><Link to="/about">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/">Expertise</Link></li>
                            <li><Link to="/">Projects</Link></li>
                            <li><Link to="/">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={classnames('footerContactsContainer')}>
                        <h4>Contacts</h4>
                        <ul className={classnames('footerContacts')}>
                            {
                                contacts.map((contact, i) => (
                                    <li key={i}>{contact}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h4>Social Links</h4>
                    </div>
                </div>
                <div className={classnames('footerCopyrightSection')}>
                    <h5>All rights reserved Copyrights 2024.</h5>
                    <h5>Copyrigt & Terms</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer
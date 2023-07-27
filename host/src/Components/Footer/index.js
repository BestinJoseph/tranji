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
                        <h4>TranJi Professionalism</h4>
                        <p>Tran Ji Trading & Contracting company is Saudi owned and managed company registered under the laws of the Kingdom. We offers Construction works in all possible fields including Electro Mechanical Testing and Commissioning, Manpower Supplies & Material Supply.</p>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <ul className={classnames('footerLinks')}>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/">Expertise</Link></li>
                            <li><Link to="/">Commitment</Link></li>
                            <li><Link to="/">Investors</Link></li>
                            <li><Link to="/">Landmarks</Link></li>
                            <li><Link to="/">Media</Link></li>
                            <li><Link to="/">Human Capital</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
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
                        <h4>social links.</h4>
                    </div>
                </div>
                <div className={classnames('footerCopyrightSection')}>
                    <h5>All rights reserved Copyrights 2023.</h5>
                    <h5>Copyrigt & Terms</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer
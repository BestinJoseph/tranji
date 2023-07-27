import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classnames from 'classnames'

import useStyles from './HeaderStyles'

const Header = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <div className={classes.header}>
            <div className={classnames('headerTop')}>
                <div className={ classnames('headerLogo') }>
                    <img src="/logo.png" width="70" onClick={handleNavigate} />
                </div>
                <div className={classnames('headerCommunicate')}>
                    <div>
                        <div>
                            <p>Call Us</p>
                            <h6>+966 (57) 2880 231</h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Email Us</p>
                            <h6>info@trange.sa</h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Careers</p>
                            <h6>careers@trange.sa</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classnames('headerMenuContainer')}>
                <div className={classnames('headerMenu')}>
                    <Link to="/" className={classnames('headerMenuLink')}>Home</Link>
                    <Link to="/about" className={classnames('headerMenuLink')}>About Us</Link>
                    <Link to="/expertise" className={classnames('headerMenuLink')}>Expertise</Link>
                    <Link to="/contact" className={classnames('headerMenuLink')}>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
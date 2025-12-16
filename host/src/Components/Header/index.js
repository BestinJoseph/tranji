import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import classnames from 'classnames'

import useStyles from './HeaderStyles'

const Header = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const menu = [
        {name: 'Home', link: ''}, 
        {name: 'About Us', link: 'about'}, 
        {name: 'Expertise', link: 'expertise'}, 
        {name: 'Projects', link: 'project'}, 
        {name: 'Partners', link: 'partner'}, 
        {name: 'Contact Us', link: 'contact'}
    ]
    const [menuModal, setMenuModal] = useState(false)
    const [sizeScreen, setSizeScreen] = useState(500)
    const [active, setActive] = useState('')

    // console.log(pathname)

    useEffect(()=>{
        setActive(pathname.split('/')[1])
        if(window.innerWidth >= sizeScreen) {
            console.log(window.innerWidth)
            setSizeScreen(window.innerWidth)
            setMenuModal(false)
        } else {
            setSizeScreen(500)
            setMenuModal(false)
        }
    },[pathname])

    const handleNavigate = () => {
        sizeScreen <= 500 ? setMenuModal(false) : null
        navigate('/')
    }

    const handleHumberger = () => {
        setMenuModal(!menuModal)
    }

    const menuLinkHandle = () => {
        sizeScreen <= 500 ? setMenuModal(false) : null
    }

    console.log(sizeScreen)
    // console.log(window.innerWidth)

    return (
        <div className={classes.header}>
            <div style={{ width: '85rem', margin: '0 auto', borderBottom: '1px solid white', }}>
                <div className={classnames('headerTop')}>
                    <div className={ classnames('headerLogo') }>
                        <img src="/logo.svg" width="100%" height="100%" onClick={handleNavigate} />
                    </div>
                    <div className={classnames('headerCommunicate')}>
                        <div>
                            <div>
                                <p>Call Us</p>
                                <h6>+966 (50) 636 5392</h6>
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
                    <div className={classnames('humbergerIcon')} onClick={() => handleHumberger()} ></div>
                </div>
            </div>
            <div className={classnames('headerMenuContainer')} style={{ display: menuModal ? 'inline-block' : 'none' }} >
                <div className={classnames('headerMenu')}>
                    { menu && menu.map((mee, i) => (
                        <Link style={{ background: active === mee.link ? '#3c54a4' : 'none' }} to={`/${mee.link}`} className={classnames('headerMenuLink')} key={i} onClick={() => menuLinkHandle()}>{mee.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
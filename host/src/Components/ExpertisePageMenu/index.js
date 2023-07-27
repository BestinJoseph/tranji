import React from 'react'

import useStyles from './ExpertisePageMenuStyles'
import classNames from 'classnames'

const ExpertisePageMenu = () => {
    const classes = useStyles()
    const menus = [{name: 'Industrial buildings', icon: 'industry.png'}, {name: 'Commercial buildings', icon: 'commercial.png'}, {name: 'Housing projects', icon: 'housing.png'}, {name: 'Institutional buildings', icon: 'institude.png'}]

    return (
        <div className={classes.expertiseMenu}>
            <div className={classNames('menuContainer')}>
                {
                    menus.map((menu, i) => (
                        <div key={i}>
                            <div>
                                <img src={`images/${menu.icon}`} alt={menu.name} width="75" height="auto" />
                            </div>
                            <p>{ menu.name }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ExpertisePageMenu

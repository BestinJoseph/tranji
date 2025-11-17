import React from 'react'

const PageNotFound = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '5rem 0', }}>
            <div>
                <h1 style={{ fontSize: '10rem', color: 'red', lineHeight: '8rem', marginBottom: '1rem', }}>404</h1>
            </div>
            <div>
                <h2 style={{ fontSize: '6rem', }}>Page Not Found</h2>
            </div>
        </div>
    )
}

export default PageNotFound

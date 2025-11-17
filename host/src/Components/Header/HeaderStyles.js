import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    header: {
        // height: '5rem',
        position: 'relative',

        '& .headerTop': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '5rem',
            maxWidth: '80vw',
            margin: '0 auto',
            // border: '1px solid green',

            '@media screen and (max-width: 430px)': {
                height: '4rem',
                padding: '2rem 1rem',
                position: 'fixed',
                // background: 'white',
                width: '100vw',
                borderBottom: '1px solid blue',
                zIndex: 2,
                background: 'blue',
            },

            '& .headerLogo': {
                cursor: 'pointer',
                width: '10rem',
                height: '4rem',

                '@media screen and (max-width: 430px)': {
                    height: '3rem',
                    width: '3rem',
                },
            },

            '& .headerCommunicate': {
                display: 'flex',

                '@media screen and (max-width: 430px)': {
                    display: 'none',
                },

                '& > div': {
                    padding: '0rem .5rem',
                    display: 'flex',
                    alignItems: 'center',
                    // background: '#d3d3d3',
                    marginRight: '.5rem',
                    cursor: 'pointer',
                    borderRadius: '.25rem',

                    '&::after': {
                        content: "' '",
                        display: 'inline',
                        width: '1px',
                        height: '4rem',
                        // background: 'gray',
                        marginLeft: '1rem',
                    },

                    '&:last-child': {
                        marginRight: '0rem',

                        '&::after': {
                            content: "' '",
                            display: 'none',
                        }
                    },

                    '& p': {
                        marginBottom: '.5rem',
                        fontSize: '.95rem',
                    },

                    '& h6': {
                        fontSize: '.85rem',
                    },

                    '&:hover': {
                        background: '#edefff',
                    }
                }
            },

            '& .humbergerIcon': {
                display: 'none',
                position: 'relative',

                '@media screen and (max-width: 430px)': {
                    display: 'inline-block',
                    background: 'white',
                    width: '2rem',
                    height: '2px',
                },

                '&::after': {
                    content: '" "',
                    width: '2rem',
                    height: '2px',
                    position: 'absolute',
                    bottom: 10,
                    left: 0,
                    background: 'white',
                },

                '&::before': {
                    content: '" "',
                    width: '2rem',
                    height: '2px',
                    position: 'absolute',
                    top: 10,
                    left: 0,
                    background: 'white',
                }
            }
        },

        '& .headerMenuContainer': {
            background: '#0e1f4d',  //3C54A4 //6CBE46 //#0e1f4d
            width: '100%',

            '@media screen and (max-width: 430px)': {
                background: 'white',
                // display: 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1,
                height: '100vh',
                width: '100vw',
                paddingTop: '4rem',
            },

            '& .headerMenu': {
                display: 'flex',
                justifyContent: 'flex-end',
                // background: '#092759',
                color: 'white',
                maxWidth: '80vw',
                margin: '0 auto',

                '@media screen and (max-width: 430px)': {
                    display: 'block',
                    maxWidth: '100%',
                    height: '100%',
                    padding: '2rem',
                },

                '& .headerMenuLink': {
                    color: 'white',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    fontSize: '.85rem',
                    padding: '.75rem .75rem',
                    marginRight: '.5rem',

                    '@media screen and (max-width: 430px)': {
                        display: 'block',
                        paddingBottom: '1.5rem',
                        fontSize: '1.25rem',
                        color: '#0e1f4d',
                    },

                    '&:hover': {
                        color: '#6cbe46',
                    },

                    '&:last-child': {
                        paddingRight: '0rem',
                    }
                }
            },
        },
    },
    
}))
import { makeStyles } from "@mui/styles"

export default makeStyles((theme)=>({
    projectsContainer: {
        background: '#e2e8f0',
        padding: '6rem',
        position: 'relative',
        height: '100%',

        '@media screen and (max-width: 430px)': {
            padding: '3rem 2rem',
        },

        '& .projectsSubContainer': {
            // maxWidth: '1080px',
            width: '80vw',
            height: '100%',
            margin: '0 auto',

            '@media screen and (max-width: 430px)': {
                marginBottom: '.25rem',
                maxWidth: '100%',
                width: '100vw',
            },

            '& h5': {
                marginBottom: '1rem',

                '@media screen and (max-width: 430px)': {
                    marginBottom: '.25rem',
                    // display: 'none',
                },
            },

            '& .projectHeaderSection': {
                textAlign: 'center',
                textTransform: 'capitalize',

                '@media screen and (max-width: 430px)': {
                    display: 'inline-block',
                },

                '& .projectMoreLink': {
                    margin: '1rem 0',
                    display: 'inline-block',
                    textDecoration: 'none',
                    fontWeight: 600,
                    color: '#0e1f4d',
                    transition: 'all .7s',

                    '&:hover': {
                        color: '#6cbe46',
                        transform: 'scale(.95)'
                    }
                }
            },

            '& h1': {
                // marginBottom: '1rem',
                fontSize: '2.5rem',
            },

            '& .projectLists': {
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridColumnGap: '4rem',
                marginTop: '2rem',

                '@media screen and (max-width: 430px)': {
                    display: 'block',
                    // display: 'none',
                    width: '100%',
                },

                '& .projectItem': {
                    position: 'relative',
                    width: '100%',
                    height: "100%",

                    '@media screen and (max-width: 430px)': {
                        width: '100%',
                        marginBottom: '3rem',
                    },

                    '&:hover': {
                        cursor: "pointer",
                        
                        "&::before": {
                            content: "' '",
                            width: '100%',
                            border: '1px solid white',
                            borderRadius: '10px',
                            height: '100%',
                            position: 'absolute',
                            transform: 'scale(1.1)',
                        }
                    },

                    '& .projectItemContent': {

                        '&:hover': {
                            transition: 'all .7s',
                            color: 'blue',
                        }
                    },

                    '& .projectItemImageContainer': {
                        // height: "14rem",
                        width: "100%",
                        marginBottom: '1.75rem',
                        transition: 'ease-in-out .7s',
                        borderRadius: '10px',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',
                        backgroundPosition: 'center center',
                        overflow: "hidden",

                        [`@media only screen and (max-width: 1120px)`]: {
                            // height: "8rem",
                            width: "10rem",
                        },

                        '& .projectItemImage': {
                            cursor: 'pointer',
                        },
                    },

                    '& .projectItemName': {
                        // position: 'absolute',
                        // bottom: '2rem',
                        // textAlign: 'center',
                        // background: 'rgba(51, 1, 253, 1)',
                        width: '100%',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'black',
                        // padding: '2rem 0',
                    },

                    '& .projectItemClientName': {
                        // position: 'absolute',
                        // bottom: '2rem',
                        // textAlign: 'center',
                        // background: 'rgba(51, 1, 253, 1)',
                        width: '100%',
                        fontSize: '1rem',
                        fontWeight: 400,
                        color: 'gray',
                        paddingTop: '.5rem',
                        // padding: '2rem 0',
                    },

                    '&:last-child': {
                        
                        '@media screen and (max-width: 430px)': {
                            marginBottom: '0rem',
                        },
                    },
                }
            }
        },

        '& .modalCss': {
            position: 'fixed',
            height: '100%',
            width: '99vw',
            background: 'rgb(0,0,0,0.85)',
            top: 0,
            left: 0,
            // textAlign: 'center',
            margin: '0 auto',
            zIndex: '9',

            '& p': {
                zIndex: '10',
                color: 'white',
                fontSize: '1.5rem',
                position: 'absolute',
                right: '5rem',
                top: '3rem',
            },

            '& .modalCssContainer': {
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                width: '80%',
                height: '90%',
                // border: '1px solid red',
                color: 'white',
                fontSize: '1.5rem',

                '& .modalImageContainer': {
                    width: '50rem',
                    height: 'auto',
                    margin: '0 auto',
                }
            }
        }
    }
}))
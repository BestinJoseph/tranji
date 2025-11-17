import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    projects: {
        padding: '3rem 0 5rem',
        position: 'relative',

        '@media screen and (max-width: 430px)': {
            padding: '3rem 2rem',
        },
        
        '& .projectListsContainer': {
            maxWidth: '1080px',
            width: '100%',
            margin: '0 auto',

            '& .projectMenu': {
                display: 'flex',

                '& li': {
                    marginRight: '2rem',
                    cursor: 'pointer',
                    padding: '0',
                    textTransform: 'capitalize',

                    '&:last-child': {
                        marginRight: '0rem',
                    },

                    '&:hover': {
                        background: 'pink'
                    }
                }
            },

            '& .projectList': {
                marginTop: '3rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: '2rem',

                '@media screen and (max-width: 430px)': {
                    gridTemplateColumns: '1fr',
                },

                '& .projectItem': {
                    // border: '1px solid blue',
                    cursor: 'pointer',
                    boxShadow: '0px 0px 5px #E5E4E2',
                    // borderRadius: '10px',

                    '& .projectItemImageContainer': {
                        width: '100%',
                        height: '12rem',
                        // border: '1px solid blue',
                        overflow: 'hidden',
                        // borderRadius: '10px 10px 0 0',
                        
                        '& .projectItemImage': {
                            width: '100%',
                            height: 'auto',
                            transition: 'ease-in-out .7s',
                            
                            '&:hover': {
                                transform: 'scale(1.1)',
                            }
                        },
                    },

                    '& .projectItemText': {
                        background: 'white',
                        padding: '2rem 1rem',
                        // borderRadius: '0 0 10px 10px ',

                        '& h5': {
                            lineHeight: '1.35rem',
                            fontSize: '1.15rem',
                            fontWeight: '500',
                            color: '#063881',
    
                            '&:hover': {
                                // color: 'green',
                                textDecoration: 'underline',
                            }
                        }
                    },
                }
            }
        },

        '& .projectsModal': {
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '10',
            width:'100%',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',

            '@media screen and (max-width: 430px)': {
                width:'100vw',
            },

            '& .projectModalContainer': {
                width: '30rem',
                background: 'white',
                position: 'relative', //
                top: '0',
                right: '0',
                height: '100%',
                padding: '2rem',
                overflowY: 'scroll',
                overflowX: 'clip',

                '@media screen and (max-width: 430px)': {
                    width:'100vw',
                },

                '& .modalProjectImageContainer': {
                    width: '100%',
                    height: 'auto',

                    '& .modalProjectImage': {
                        // border: '1px solid red',
                        width: '100%',
                        height: 'auto',
                    }
                },

                '& .modalContentContainer': {
                    marginBottom: '3rem',

                    '& .modalStatusAndCloseBntContainer': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '1rem',

                        '& .status': {
                            marginBottom: '0.5rem',
                            padding: '.5rem .75rem',
                            color: 'white',
                            backgroundColor: 'blue',
                            display: 'inline-block',
                            borderRadius: '.25rem',

                            '@media screen and (max-width: 430px)': {
                                marginBottom: '1.5rem',
                            },
                        },

                        '& .projectModalCloseBtn': {
                            // position: 'absolute',
                            top: '0rem',
                            right: '-1rem',
                            width: '4rem',
                            height: '4rem',
                            border: '1px solid white',
                            borderRadius: '2rem',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'ease-in-out .4s',
                            fontWeight: '600',
                            fontSize: '.75rem',
                            color: 'white',
                            background: "orange",
                            position: 'sticky',

                            '@media screen and (max-width: 430px)': {
                                right: '1rem',
                                borderColor: 'black',
                                color: 'black',
                                width: '3rem',
                                height: '3rem',
                                fontSize: '.65rem',
                            },

                            '&:hover': {
                                color: 'black',
                                // borderColor: 'blue',
                                background: 'white',
                                fontSize: '.85rem',
                            },
                        },
                    },

                    '& h1': {
                        marginBottom: '0.75rem',

                        '@media screen and (max-width: 430px)': {
                            marginBottom: '1.25rem',
                        },
                    },

                    '& h2': {
                        marginBottom: '0.75rem',

                        '@media screen and (max-width: 430px)': {
                            marginBottom: '1.25rem',
                        },
                    },

                    '& .projectDesc': {
                        marginBottom: '0.75rem',
                    }
                }
            },
        }
    }
}))
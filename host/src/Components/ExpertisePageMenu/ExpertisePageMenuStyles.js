import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    expertiseMenu: {
        padding: '0rem 0rem',
        background: '#edf2f7',
        marginBottom: '5rem',
        display: 'block-inline',
        border: '1px solid transparent',

        '@media screen and (max-width: 430px)': {
            padding: '1.5rem 1rem',
        },

        '& .serviceListsContainer': {
            width: '65vw',
            margin: '0 auto 5rem auto',
            padding: '3rem 4rem',
            borderRadius: '10px',
            background: 'white',

            '& .servicesListsTitle': {
                marginBottom: '1.25rem',
            },
            
            '& .serviceListsInnerContainer': {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',


                '& .serviceListsItem': {
                    marginBottom: '.5rem',
                    fontWeight: 600,
                    cursor: 'pointer',

                    '&:hover': {
                        color: '#6cbe46',
                    }
                }
            }
        },

        '& .menuContainer': {
            maxWidth: '85%',
            width: '75vw',
            margin: '0 auto 2rem auto',
            borderBottom: '4px solid #F9F9F9',

            '@media screen and (max-width: 430px)': {
                overflowX: 'scroll',
                maxWidth: '100%',
            },

            '& .menuSubContainer': {
                display: 'flex',
                width: '100%',
                justifyContent: 'center',

                '& .menuItems': {
                cursor: 'pointer',
                position: 'relative',
                textAlign: 'center',

                    '@media screen and (max-width: 430px)': {
                        marginRight: '1rem',
                    },

                    '& .menuItemsContent': {
                        position: 'relative',
                        marginRight: '.75rem',
                        bottom: '0',
                        left: '0',
                        zIndex: 1,
                        background: '#F9F9F9',
                        // height: '5rem',
                        borderRadius: '5px 5px 0 0',
                        padding: '.5rem 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'transform 10s',

                        '&:hover': {
        
                            '& p': {
                                color: '#6cbe46',
                            },

                            "&::after": {
                                content: '" "',
                                position: 'absolute',
                                bottom: '-4px',
                                left: 0,
                                height: '4px',
                                width: '100%',
                                borderBottom: '4px solid #6cbe46',
                            }
                        },
                    },

                    '& .active': {
        
                        '& p': {
                            color: '#6cbe46',
                        },

                        "&::after": {
                            content: '" "',
                            position: 'absolute',
                            bottom: '-4px',
                            left: 0,
                            height: '4px',
                            width: '100%',
                            borderBottom: '4px solid #6cbe46',
                        }
                    },

                    '&:last-child': {

                        '@media screen and (max-width: 430px)': {
                            marginRight: '0rem',
                        },

                        '& .menuItemsContent': {
                            marginRight: '0rem',

                        }
                    }
                }
            }

            
        },

        '& .serviceExplainedSection': {
            margin: '0 auto 5rem auto',
            width: '75vw',
            display: 'grid',
            gridTemplateColumns: '.60fr 1fr',
            
            '& .serviceExplainedInnerContainer': {

                '& .serviceExplainerTitle': {
                    margin: '2rem 0',
                },

                '& .serviceExplainerSubTitle': {
                    lineHeight: '1.5rem'
                },

                '& .serviceExplainerListsContainer': {
                    margin: '2rem 0',
                    paddingLeft: '2rem',

                    '& .serviceExplainerListsItem': {
                        marginBottom: '.5rem',
                        fontWeight: 400,
                        fontSize: '1.05rem',
                    }
                }
            }
        }
    }
}))
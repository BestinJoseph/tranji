import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    footerContainer: {
        background: '#092759',
        color: 'white',

        '& .footerSubContainer': {
            maxWidth: '1140px', 
            margin: '0 auto',

            '@media screen and (max-width: 430px)': {
                padding: '1rem',
            },

            '& .footerTopSection': {
                display: 'grid',
                gridTemplateColumns: '1fr .65fr .65fr 1fr',
                borderBottom: '1px solid white',
                padding: '3rem 0 1rem',

                '@media screen and (max-width: 430px)': {
                    display: 'inline-block',
                    padding: '1rem 0 1rem',
                },

                '& .footerIntro': {
                    width: '80%',

                    '@media screen and (max-width: 430px)': {
                        width: '100%',
                        marginBottom: '2rem',
                    },

                    '& h4': {
                        marginBottom: '1.5rem',
                    },

                    '& p': {
                        fontSize: '.80rem',
                        lineHeight: '1.25rem',
                        fontWeight: '200',
                    }
                },

                '& .footerLinksContainer': {

                    '& h3': {
                        marginBottom: '1rem',
                    
                        '@media screen and (max-width: 430px)': {
                            marginBottom: '1rem',
                        },
                    },

                    '@media screen and (max-width: 430px)': {
                        marginBottom: '2rem',
                    },

                    '& .footerLinks': {
                        listStyle: 'none',
                        paddingLeft: '0rem',

                        '& li': {
                            marginBottom: '.5rem',
                            fontSize: '.95rem',

                            '& a': {
                                color: 'white',
                                textDecoration: 'none',

                                '&:hover': {
                                    textDecoration: 'underline',
                                }
                            }
                        }
                    },

                },

                '& .footerContactsContainer': {

                    '@media screen and (max-width: 430px)': {
                        marginBottom: '2rem',
                    },

                    '& h4': {
                        marginBottom: '1rem',

                        '@media screen and (max-width: 430px)': {
                            marginBottom: '1rem',
                        },
                    },

                    '& .footerContacts': {
                        listStyle: 'none',
                        paddingLeft: '0rem',
                        width: '85%',

                        '& li': {
                            marginBottom: '1rem',
                            fontSize: '.8rem',
                            lineHeight: '1.25rem',
                        }
                    }
                }
            },

            '& .footerCopyrightSection': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '5rem',
            }
        },
        
    },
}))

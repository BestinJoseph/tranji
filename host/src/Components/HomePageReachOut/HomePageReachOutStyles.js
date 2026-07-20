import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    reachOutContainer: {
        padding: '4rem 0',
        background: '',
        backgroundImage: 'url(/images/discussion.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        height: '35rem',

        '@media screen and (max-width: 430px)': {
            padding: '3rem 2rem',
        },

        '& .reachOutSubContainer': {
            maxWidth: '1172px',
            margin: '0 auto',

            '& .reachoutText': {
                width: '50%',
                background: '#6cbe46',
                padding: '2rem',

                '& h1': {
                    fontWeight: '700',
                    color: 'white',
                },

                '& h5': {
                    cursor: 'pointer',
                    marginTop: '1rem',
                    fontSize: '1.2rem',
                    border: '.5px solid white',
                    display: 'inline-block',
                    padding: '.5rem',
                    color: 'white',

                    '&:hover': {
                        color: '#6cbe46',
                        background: 'white',
                    }
                }
            },

            '& .reachOutContext': {
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                marginTop: '2rem',
                gridColumnGap: '4rem',

                '@media screen and (max-width: 430px)': {
                    display: 'inline-block',
                },

                '& .reachOutForm': {
                    // border: '1px solid blue',

                    '@media screen and (max-width: 430px)': {
                        marginBottom: '2rem',
                    },

                    '& .reachOutSubForm': {

                        '& .reachOutFormField': {
                            borderRadius: '0rem',
                            borderWidth: '.05px',
                            width: '100%',
                            fontSize: '1rem',
                            padding: '.5rem',
                        },
                    
                        '& > *': {
                            marginBottom: '1.25rem',
                        },

                        '& .reachOutFormBtn': {
                            color: 'green',
                            padding: '.75rem 1rem',
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            borderRadius: '0px',
                            borderWidth: '0',
                            cursor: 'pointer',

                            '&:hover':{
                                background: 'green',
                                color: 'white',
                            }
                        }
                    }
                },

                '& .brochureList': {
                    width: '100%',

                    '& .corporate': {
                        border: '1px solid gray',
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }
                }
            }
        }
    }
}))

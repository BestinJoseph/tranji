import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    expertiseContainer: {
        background: '#e2e8f0',

        '& .expertiseSubContainer': {
            maxWidth: '80vw',
            margin: '0 auto',
            padding: '4rem 0 2rem',
            // border: '1px solid white',

            '@media screen and (max-width: 430px)': {
                padding: '3rem 2rem',
            },

            '& .expertiseServiceContainer': {
                width: '40vw',
                minWidth: '750px',
                margin: '1rem auto 6rem auto',

                '& h5': {
                    fontSize: '1.15rem',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    fontWeight: 400,
                },

                '& h1': {
                    marginBottom: '.5rem',
                    fontSize: '2.75rem',
                    textAlign: 'center',
                },

                '& .expertiseLists': {
                    // boxShadow: '0px 0px 2px gray',
                    borderRadius: '10px',
                    padding: '1rem',

                    '@media screen and (max-width: 430px)': {
                        display: 'inline-block',
                    },

                    '& .expertItem': {
                        padding: '1rem 1.5rem',
                        display: 'grid',
                        gridTemplateColumns: '.15fr auto 1fr',
                        gridColumnGap: '2rem',
                        alignItems: 'center',

                        '& .expertItemIcon': {
                            width: '4rem',
                            height: '4rem',
                            background: '#0F3271',
                            borderRadius: '50%',
                        },

                        '& h3': {
                            color: 'orange',
                            marginBottom: '1rem',
                        },

                        '&:hover': {
                            background: 'white',
                            borderBottom: 'none',
                        },

                        '&:last-child': {

                            '@media screen and (max-width: 430px)': {
                                marginBottom: '0rem',
                            },
                        }
                    },

                    
                },
            },

            '& .expertiseAvailabilitySection': {
                background: 'white',
                marginTop: '3rem',
                padding: '3rem 5rem',
                display: 'grid',
                gridTemplateColumns: '.75fr 1fr',
                color: 'black',
                columnGap: '4rem',
                borderRadius: '10px',


                '& .expertiseAvailabilityTitleSection': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingRight: '2rem',
                },

                '& .expertiseAvailbityContentSection': {

                    '& .availabilityContentItems': {
                        borderBottom: '1px solid grey',
                        display: 'grid',
                        gridTemplateColumns: '1fr .2fr',
                        padding: '1rem 0',
                        alignItems: 'center',

                        '& .vendorImageContainer': {
                            width: '100%',
                            height: '100%',

                            '& .vendorImage': {

                            }
                        },

                        '& .availabilityContentItemContent': {

                            '& h1': {
                                marginBottom: 5,
                                fontSize: '2rem',
                            }
                        },

                        '&:last-child': {
                            border: 'none',
                            padding: '1rem 0 0 0',
                        },

                        '&:first-child': {
                            padding: '0 0 1rem 0',
                        }
                    }
                }
            }
        }
    }
}))
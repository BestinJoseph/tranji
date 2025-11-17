import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    sliderContainer: {
        height: '45vh',
        // border: '1px solid yellow',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // background: '#96b576',
        width: '100%',
        maxHeight: '35rem',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',

        '@media screen and (max-width: 430px)': {
            overflow: 'hidden',
            width: 'auto',
            // maxWidth: '100%',
            height: '100vh',
            // maxHeight: '100vh',
        },

        '& .videoContent': {
            width: '100%', 
            overflow: 'hidden', 
            objectFit: 'fill',

            '@media screen and (max-width: 430px)': {
                height: '100%',
                width: 'auto', 
                overflow: 'hidden', 
            },
        },

        '& .sliderImage': {
            height: 'auto',
            width: '100%'
        },

        '& .sliderContent': {
            position: 'absolute',
            bottom: '0',
            left: '0',
            background: 'linear-gradient(to right, rgba(6, 56, 129, 1), rgba(255,0,0,0))',
            height: '100%',
            width: '100%',
            color: 'white',
            // backdropFilter: 'blur(2px)',
            display: 'flex',
            alignItems: 'center',

            '@media screen and (max-width: 430px)': {
                bottom: '2rem',
                left: '1rem',
                color: 'white',
            },

            '& .sliderContentInner': {
                height: '',
                width: '100vw',
                maxWidth: '60vw',
                margin: '0 auto',

                '& h5': {
                    fontSize: '1rem',
                    fontWeight: '600',
                    margin: '0 0 0.25rem 0',
                    lineHeight: '1.5rem',
                    width: '35vw',
                    textTransform: 'uppercase',
    
                    '@media screen and (max-width: 430px)': {
                        marginBottom: '.25rem',
                    },
                },

                '& h1': {
                    fontSize: '3.25rem',
                    fontWeight: '600',
                    margin: '0 0 1.25rem 0',
                    lineHeight: '3.25rem',
                    width: '35vw',
    
                    '@media screen and (max-width: 430px)': {
                        marginBottom: '.25rem',
                    },
                },
    
                '& h2': {
                    fontSize: '1.25rem',
                    fontWeight: '400',
                    marginBottom: '1.5rem',
                    lineHeight: '1.5rem',
                    width: '32vw',
    
                    '@media screen and (max-width: 430px)': {
                        // marginBottom: '.25rem',
                    },
                },

                '& .slideBtn': {
                    cursor: 'pointer',
                    padding: '1rem 1.25rem',
                    fontSize: '1.15rem',
                    borderRadius: '5px',
                    border: 'none',
                    background: '#6cbe46',
                    color: 'white',

                    '&:hover': {
                        background: '#3c54a4',
                        color: 'white',
                    }
                }
            }
        }
    }
}))
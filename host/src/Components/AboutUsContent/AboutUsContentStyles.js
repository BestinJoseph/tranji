import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    aboutContent: {

        '& .aboutContentContainer': {
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '4rem 0',

            '@media screen and (max-width: 430px)': {
                padding: '3rem 2rem',
            },

            '& h4': {
                display: 'flex',
                alignItems: 'center',

                '&::before': {
                    content: "' '",
                    display: 'inline-block',
                    marginRight: '1rem',
                    width: '3rem',
                    height: '2px',
                    background: 'red',
                }
            },

            '& h1': {
                marginBottom: '1rem',
            },

            '& .aboutUsContainer': {

                '& p': {
                    marginBottom: '1rem',
                    lineHeight: '1.5rem',
                }
            },

            '& .aboutUsMissionVision': {
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gridColumnGap: '3rem', 
                marginTop: '5rem',

                '@media screen and (max-width: 430px)': {
                    gridTemplateColumns: '1fr', 
                },

                '& .missionSection': {
                    background: 'green', 
                    padding: '2rem', 
                    color: 'white',

                    '@media screen and (max-width: 430px)': {
                        marginTop: '2rem',
                    },
                }
            },

            '& .whoWeAre': {
                marginTop: '5rem', 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gridColumnGap: '3rem', 

                '@media screen and (max-width: 430px)': {
                    gridTemplateColumns: '1fr', 
                },

                '& .tranjiLogo': {
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',

                    '@media screen and (max-width: 430px)': {
                        marginTop: '2rem'
                    },
                }
            }
        }
    }
}))

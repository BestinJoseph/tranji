import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    expertiseBuilding: {
        color: 'blue',
        padding: '4rem 0 1rem 0',
        background: '#edf2f7',

        '@media screen and (max-width: 430px)': {
            padding: '3rem 2rem',
        },

        '& .buildingsContainer': {
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr',
            columnGap: '3rem',

            '@media screen and (max-width: 430px)': {
                gridTemplateColumns: '1fr',
            },

            '& h4': {
                color: '#524536',
                display: 'flex',
                alignItems: 'center',

                '&::before': {
                    content: "''",
                    width: '3rem',
                    height: '2px',
                    backgroundColor: '#F6BA1E',
                    display: 'inline-block',
                    marginRight: '1rem',
                }
            },

            '& h1': {
                color: '#513096',
                margin: '1rem 0rem 1.25rem',

            },

            '& .buildContents': {

                '& p': {
                    marginBottom: '1rem',
                    color: '#5D5D5D',

                    '&:last-child': {
                        marginBottom: '0rem',
                    }
                }
            },

            '& .expertiseBuildingImageContainer': {

                '@media screen and (max-width: 430px)': {
                    width: '100%',

                },
            },

            '& .expertiseBuildingContainer': {

                '@media screen and (max-width: 430px)': {
                    marginTop: '1.5rem',
                },

                '& .expertiseTitle': {
                    fontSize: '2.5rem',
                    color: 'black',
                    width: '60%',
                    margin: '0 auto 2rem auto',
                    textAlign: 'center',
                    lineHeight: '2.3rem',
                }
            },

            '& .expertiseClients': {
                marginBottom: '4rem',
                display: 'flex', 
                paddingTop: '.75rem',
                justifyContent: 'center',
                alignItems: 'center',

                '& .expertiseClientsItem': {
                    height: '5rem',
                    width: '12rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },

                '& .expertiseClientsMoreBtn': {
                    textDecoration: 'none',
                    color: 'black',
                    padding: '1rem .5rem',
                    fontWeight: 600,

                    '&:hover': {
                        background: '#e2e8f0',

                    }
                }
            }
        }
    }
}))
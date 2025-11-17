import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    clients: {
        padding: '6rem 0 4rem',

        '@media screen and (max-width: 430px)': {
            padding: '3rem 2rem',
        },

        '& .clientsContainer': {
            maxWidth: '80vw',
            margin: '0 auto',
            textAlign: 'center',

            '@media screen and (max-width: 430px)': {
                border: 'none',
            },

            '& h5': {
                marginBottom: '1rem',
            },

            '& h1': {
                marginBottom: '2rem',
                fontSize: '2.5rem',
            },

            '& .clients': {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gridRowGap: '2rem',

                '@media screen and (max-width: 430px)': {
                    gridTemplateColumns: '1fr 1fr',
                },

                '& .clientItem': {
                    // background: 'white',
                    // width: '2rem',
                    // height: '2rem',
                    // borderRadius: '50%',

                    '@media screen and (max-width: 430px)': {
                        width: '4rem',
                        height: '4rem',
                    },

                    '& .clientImage': {
                        width: '100%',
                        height: '3rem',
                    }
                }
            }
        }
    }
}))

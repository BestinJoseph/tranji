import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    clients: {
        padding: '4rem 0',
        background: '#F8931F',

        '& .clientsContainer': {
            maxWidth: '1080px',
            margin: '0 auto', 
            border: '1px solid blue',

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

                '& .clientItem': {
                    background: 'white',
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                }
            }
        }
    }
}))

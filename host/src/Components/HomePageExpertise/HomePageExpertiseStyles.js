import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    expertiseContainer: {
        background: '#092759',

        '& .expertiseSubContainer': {
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '4rem 0',
            // border: '1px solid white',
            color: 'white',

            '& h5': {
                marginBottom: '1rem',
            },

            '& h1': {
                marginBottom: '2rem',
                fontSize: '2.5rem',
            },

            '& .expertiseLists': {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridColumnGap: '2rem',

                '& .expertItem': {
                    border: '.5px solid #0F3271',
                    height: '10rem',
                    marginBottom: '1.5rem',
                    padding: '1.5rem',

                    '& .expertItemIcon': {
                        width: '4rem',
                        height: '4rem',
                        background: '#0F3271',
                        borderRadius: '50%',
                        marginBottom: '.75rem',
                    },

                    '& h3': {
                        color: 'orange',
                    },

                    '&:hover': {
                        border: '.5px solid orange',
                    }
                }
            }
        }
    }
}))
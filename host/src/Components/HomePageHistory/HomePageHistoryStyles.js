import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    historyContainer: {
        padding: '4rem 0',

        '& .historySubContainer': {
            // border: '1px solid red',
            margin: '0 auto',
            maxWidth: '1080px',

            '& .historyContent': {
                width: '100%',
                margin: '2rem 0 2rem',
                display: 'grid',
                gridTemplateColumns: '.75fr 1fr .5fr',
                gridColumnGap: '3rem',

                '& > div p': {
                    lineHeight: '1.5rem',

                }
            },

            '& .historyStats': {
                display: 'flex',
                justifyContent: 'space-between',

                '& .historyStatsItem': {
                    borderRight: '2px dashed gray',
                    paddingRight: '2rem',

                    '& .historyStatCount': {
                        marginBottom: '.5rem',
                        color: '#009AB2'
                    }
                }
            }
        }
    }
}))
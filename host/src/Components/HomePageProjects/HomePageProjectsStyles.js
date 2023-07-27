import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    projectsContainer: {
        background: '#FDF0E0',
        padding: '4rem 0',

        '& .projectsSubContainer': {
            maxWidth: '1080px',
            margin: '0 auto',

            '& h5': {
                marginBottom: '1rem',
            },

            '& h1': {
                marginBottom: '1rem',
                fontSize: '2.5rem',
            },

            '& .projectLists': {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridColumnGap: '1rem',
                marginTop: '2rem',

                '& .projectItem': {
                    // border: '1px solid gray',
                    height: '15rem',
                    position: 'relative',

                    '& .projectItemName': {
                        position: 'absolute',
                        bottom: '2rem',
                        textAlign: 'center',
                        background: 'rgba(51, 1, 253, 1)',
                        width: '100%',
                        fontSize: '1.25rem',
                        color: 'white',
                        padding: '.5rem 0',
                    }
                }
            }
        }
    }
}))
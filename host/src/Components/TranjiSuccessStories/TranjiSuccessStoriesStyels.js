import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    services: {
        // border: '1px solid blue',
        maxWidth: '1080px',
        width: '100%',
        margin: '5rem auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '4rem',
        
        '& .successStoriesProjects': {

            '& p': {
                fontSize: '1.25rem',
                lineHeight: 1.5,
                margin: '2rem 0',
            },

            '& a': {
                fontSize: '1.25rem',
                textDecoration: 'none',
                color: 'blue',
                fontWeight: 500,

                '&:hover': {
                    color: 'darkblue',
                }
            }
        },

        '& .successStoriesContacts': {

            '& p': {
                fontSize: '1.25rem',
                lineHeight: 1.5,
                margin: '2rem 0',
            },

            '& a': {
                fontSize: '1.25rem',
                textDecoration: 'none',
                color: 'blue',
                fontWeight: 500,

                '&:hover': {
                    color: 'darkblue',
                }
            }
        }
    }
}))
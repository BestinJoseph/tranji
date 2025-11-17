import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    expertiseProjects: {
        padding: '4rem 0',

        '@media screen and (max-width: 430px)': {
            padding: '3rem 2rem',
        },

        '& .projectsContainer': {
            maxWidth: '1140px',
            margin: '0 auto',

            '& .projectLists': {
                marginTop: '2rem',
            }
        }
    }
}))
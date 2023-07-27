import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    expertiseProjects: {
        padding: '4rem 0',

        '& .projectsContainer': {
            maxWidth: '1140px',
            margin: '0 auto',

            '& .projectLists': {
                marginTop: '2rem',
            }
        }
    }
}))
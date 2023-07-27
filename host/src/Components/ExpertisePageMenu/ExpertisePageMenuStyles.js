import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    expertiseMenu: {
        background: 'orange',
        padding: '1rem 0rem',

        '& .menuContainer': {
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    }
}))
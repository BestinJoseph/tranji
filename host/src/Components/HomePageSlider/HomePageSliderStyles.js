import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    sliderContainer: {
        height: '45rem',
        // border: '1px solid yellow',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#96b576',

        '& h1': {
            fontSize: '7rem',
            margin: '0rem',
            lineHeight: '6rem',
        }
    }
}))
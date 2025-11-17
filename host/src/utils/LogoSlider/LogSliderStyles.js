import { makeStyles } from '@mui/styles'

export default makeStyles(()=>({
    logoSlider: {
        position: 'relative',

        '& .logoSliderSubContainer': {
            height: '100%',
            width: '100%',
            textAlign: "center",
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'none',
            alignItems: 'center',
        },

        '& .slick-slide': {
            minHeight: '8rem',
        },

        '&:hover .logoSliderSubContainer': {
            display: 'flex',
        }
    }
}))
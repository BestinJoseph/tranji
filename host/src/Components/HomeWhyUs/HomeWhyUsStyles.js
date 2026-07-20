import { makeStyles } from "@mui/styles";
import { display, padding } from "@mui/system";

export default makeStyles((theme) => ({
    whyus: {
        height: '35rem',
        width: '1172px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '.75fr 1fr',

        '& .whyUsImageContainer': {
            // width: '100%',
            height: '100%',
            overflow: 'hidden',
        },

        '& .whyUsContentContainer': {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '2.5rem',

            '& .whyusContentItem': {

                '& h4': {
                    marginBottom: '1rem',
                },

                '& p': {
                    fontSize: '2.25rem',
                    fontWeight: '700',
                    width: '70%',
                    lineHeight: '1.2',
                    marginBottom: '1.5rem',
                },

                '& a': {
                    paddingTop: '12rem'
                }
            }
        }
    }
}))
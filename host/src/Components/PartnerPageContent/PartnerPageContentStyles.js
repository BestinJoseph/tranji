import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
    partner: {
        maxWidth: '60vw',
        width: '100vw',
        margin: '4rem auto 6rem',

        '@media screen and (max-width: 430px)': {
            padding: '3rem 2rem',
            margin: '0rem auto', 
        },

        '& .partnerContainer': {
            width: '100%',
            border: '1px solid #0e1f4d',
            padding: '3rem',
            borderRadius: '10px',

            '@media screen and (max-width: 430px)': {
                width: '100%',
                textAlign: 'center',
            },

            '& .partnerSubContainer': {
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                justifyContent: `space-between`, 
                rowGap: '3rem', 
                columnGap: '1rem',

                '@media screen and (max-width: 430px)': {
                    gridTemplateColumns: 'repeat(1, 1fr)',

                },

                '& .partnerItemsImageContainer': {
                    // width: '16.1rem', 
                    height: '100%',
                    textAlign: 'center',

                    '@media screen and (max-width: 430px)': {
                        width: '100%',
                        height: 'auto',
                        border: '1px solid blue',
    
                    },

                    '& .partnerItemsImage': {
                        width: '80%', 
                        height: '100%',
    
                        '@media screen and (max-width: 430px)': {
                            width: '80%',
                            height: 'auto',
                            padding: '1rem 0',
                        },
                    }
                }
            }
        }
    }
}))

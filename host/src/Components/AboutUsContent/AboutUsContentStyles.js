import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    aboutContent: {

        '& .aboutContentContainer': {
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '4rem 0',

            '& h4': {
                display: 'flex',
                alignItems: 'center',

                '&::before': {
                    content: "' '",
                    display: 'inline-block',
                    marginRight: '1rem',
                    width: '3rem',
                    height: '2px',
                    background: 'red',
                }
            },

            '& h1': {
                marginBottom: '2rem',
            },

            '& p': {
            },

            '& .aboutItems': {
                width: '500px',

                '& .aboutValueItem': {
                    margin: '2rem 0',

                    '& .aboutValueItemSingle': {
                        marginBottom: '2rem',

                        '& h3': {
                            marginBottom: '1rem',
                        },
        
                        '& p': {
                            lineHeight: '1.25rem',
                            marginBottom: '.75rem',
                        }
                    }
                }
            }
        }
    }
}))

import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    expretiseContainer: {

        '& .expretiseHeader': {
            background: '#063881',
            padding: '7rem 0',
            color: 'white',

            '& .expretiseHeaderContainer': {
                maxWidth: '1080px',
                margin: '0 auto',

                '& .expretiseBreadCrum': {
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '2rem',
                    
                    '& h5': {
                        // marginRight: '1rem',
                        display: 'flex',
                        alignItems: 'center',

                        '&::after': {
                            content: "' '",
                            display: 'inline-block',
                            width: '1.5rem',
                            height: '2px',
                            background: 'white',
                            // padding: '.2rem',
                            margin: '0 1rem',
                        },

                        '&:last-child': {
                            marginRight: '0rem',

                            '&::after': {
                                display: 'none',
                            }
                        }
                    },
                },

                '& h4': {
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',

                    '&::before': {
                        content: "' '",
                        display: 'inline-block',
                        width: '3rem',
                        height: '2px',
                        background: 'yellow',
                        // padding: '.2rem',
                        marginRight: '1rem',
                    }
                }
            }
        }
    }
}))
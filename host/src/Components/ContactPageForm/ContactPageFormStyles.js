import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    contact: {

        '& .contactContainer': {
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '4rem 0',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: '2rem',

            '& .contactLocation': {
                // border: '1px solid blue',

                '& .locationHeader': {
                    marginBottom: '1.5rem',

                    '& h4': {
                        display: 'flex',
                        alignItems: 'center',

                        '&::before': {
                            content: "' '",
                            display: 'inline-block',
                            width: '3rem',
                            height: '2px',
                            backgroundColor: '#F6BA1E',
                            marginRight: '1rem',
                        }
                    }
                },

                '& .lcoationAddress': {
                    paddingLeft: '2rem',
                    width: '250px',

                    '& h6': {
                        fontSize: '.75rem',
                        fontWeight: '400',
                        marginBottom: '.65rem',
                    }
                }
            },

            '& .contactFormContainer': {
                '& .textField': {
                    fontSize: '1.05rem',
                    padding: '.25rem .5rem',
                    display: 'block',
                    marginBottom: '1rem',
                    // borderRadius: '0',
                    // border: 'red',
                    width: '100%',
    
                    '&:focus': {
                        outlineColor: 'red',
                        // borderColor: 'red',
                        borderRadius: '0',
                    }
                },
    
                '& .submitBtn': {
                    padding: '.65rem 1rem',
                    fontSize: '1.05rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '700',
    
                    '&:hover': {
                        backgroundColor: '#F6BA1E',
                    }
                }
            }
        }
    }
}))
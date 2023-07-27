import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    reachOutContainer: {
        padding: '4rem 0',

        '& .reachOutSubContainer': {
            maxWidth: '1080px',
            margin: '0 auto',

            '& .reachOutContext': {
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                marginTop: '2rem',
                gridColumnGap: '4rem',

                '& .reachOutForm': {
                    // border: '1px solid blue',

                    '& .reachOutSubForm': {

                        '& .reachOutFormField': {
                            borderRadius: '0rem',
                            borderWidth: '.05px',
                            width: '100%',
                            fontSize: '1rem',
                            padding: '.5rem',
                        },
                    
                        '& > *': {
                            marginBottom: '1.25rem',
                        },

                        '& .reachOutFormBtn': {
                            color: 'green',
                            padding: '.75rem 1rem',
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            borderRadius: '0px',
                            borderWidth: '0',
                            cursor: 'pointer',

                            '&:hover':{
                                background: 'green',
                                color: 'white',
                            }
                        }
                    }
                },

                '& .brochureList': {
                    width: '100%',

                    '& .corporate': {
                        border: '1px solid gray',
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }
                }
            }
        }
    }
}))

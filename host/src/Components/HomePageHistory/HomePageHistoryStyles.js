import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    historyContainer: {
        padding: '5rem 0',

        '@media screen and (max-width: 430px)': {
            padding: '3rem 2rem',
        },

        '& .historySubContainer': {
            // border: '1px solid red',
            margin: '0 auto',
            maxWidth: '1080px',
            textAlign: 'center',

            '& .historyHeader': {
                marginBottom: '1.5rem', 
                fontSize: '1.75rem', 
                textTransform: 'uppercase',
                fontWeight: '600'
            },

            '& .historyContent': {
                width: '100%',
                marginBottom: '4rem',

                '@media screen and (max-width: 430px)': {
                    display: 'inline-block',
                    margin: '2rem 0 2rem',
                },

                '& .historyContentInner' : {
                    width: '65%',
                    margin: '0 auto',

                    '& .contentText' : {
                        lineHeight: '1.35rem',
                    }
                }
            },

            '& .historyStats': {
                display: 'grid',
                justifyContent: 'space-between',
                gridTemplateColumns: 'repeat(4, 1fr)',
                columnGap: '2.5rem',

                '@media screen and (max-width: 430px)': {
                    display: 'inline-block',
                },

                '& .historyStatsItem': {
                    height: '15rem',
                    cursor: 'pointer',
                    width: '100%',
                    borderRadius: '10px',
                    position: 'relative',
                    overflow: 'hidden',

                    '@media screen and (max-width: 430px)': {
                        marginBottom: '2rem',
                    },

                    '@media screen and (max-width: 1120px)': {
                        height: '10rem',
                    },

                    '& .historyImage': {
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        
                    },

                    '& .historyStatText': {
                        color: 'white',
                        display: 'none',
                        // background: '#3c54a4',
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        padding: '1rem',
                        position: 'relative',
                        zIndex: 1,
                        
                        '&::before': {
                            content: "' '",
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: -1,
                            width: '15rem',
                            height: '100%',
                            background: 'black',
                            opacity: .75,
                            borderRadius: '10px',
                        }
                    },

                    '&:hover .historyStatText': {
                        display: 'flex',
                    }
                }
            }
        }
    }
}))
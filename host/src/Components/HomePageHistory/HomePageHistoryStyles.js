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

            '@media screen and (max-width: 430px)': {
                textAlign: 'left',
            },

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
                    marginBottom: '2rem',
                },

                '& .historyContentInner' : {
                    width: '65%',
                    margin: '0 auto',

                    '@media screen and (max-width: 430px)': {
                        margin: '0',
                        width: '100%',
                    },

                    '& .contentText' : {
                        lineHeight: '1.35rem',
                        margin: '0 auto',
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
                    gridTemplateColumns: "repeat(1, 1fr)",
                    width: '100%',
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
                        width: '100%',
                        height: '20rem',
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

                        '@media screen and (max-width: 1120px)': {
                            display: 'inline',
                            alignItems: 'none',
                            justifyContent: 'none',
                        },
                        
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

                            '@media screen and (max-width: 1120px)': {
                                width: '100%',
                                height: '10rem',
                                background: 'red',
                                bottom: '0',
                                top: 'initial',
                            },
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
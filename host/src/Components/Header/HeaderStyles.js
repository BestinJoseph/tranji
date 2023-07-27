import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
    header: {
        // height: '5rem',

        '& .headerTop': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '6.5rem',
            // padding: '1rem 0',
            maxWidth: '1080px',
            margin: '0 auto',
            // border: '1px solid green',

            '& .headerLogo': {
                cursor: 'pointer',
            },
            
            '& .headerCommunicate': {
                display: 'flex',

                '& > div': {
                    paddingLeft: '2rem',
                    display: 'flex',
                    alignItems: 'center',

                    '&::after': {
                        content: "' '",
                        display: 'inline',
                        width: '1px',
                        height: '4rem',
                        background: 'gray',
                        marginLeft: '1rem',
                    },

                    '&:last-child': {

                        '&::after': {
                            content: "' '",
                            display: 'none',
                        }
                    },

                    '& p': {
                        marginBottom: '.5rem',
                        fontSize: '.95rem',
                    },

                    '& h6': {
                        fontSize: '.85rem',
                    }
                }
            },
        },

        '& .headerMenuContainer': {
            background: '#0e1f4d',  //3C54A4 //6CBE46 //#0e1f4d

            '& .headerMenu': {
                display: 'flex',
                justifyContent: 'flex-end',
                // background: '#092759',
                padding: '.75rem 0',
                color: 'white',
                maxWidth: '1080px',
                margin: '0 auto',

                '& .headerMenuLink': {
                    color: 'white',
                    textDecoration: 'none',
                    paddingRight: '1.25rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    fontSize: '.85rem',
                    

                    '&:hover': {
                        color: '#6CBE46',
                    },

                    '&:last-child': {
                        paddingRight: '0rem',
                    }
                }
            },
        },
    },
    
}))
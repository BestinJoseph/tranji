import { makeStyles } from "@mui/styles"

export default makeStyles(()=>({
    expertiseBuilding: {
        color: 'blue',
        padding: '4rem 0',

        '& .buildingsContainer': {
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '.5fr 1fr',

            '& h4': {
                color: '#524536',
                display: 'flex',
                alignItems: 'center',

                '&::before': {
                    content: "''",
                    width: '3rem',
                    height: '2px',
                    backgroundColor: '#F6BA1E',
                    display: 'inline-block',
                    marginRight: '1rem',
                }
            },

            '& h1': {
                color: '#513096',
                margin: '1rem 0rem 1.25rem',

            },

            '& .buildContents': {

                '& p': {
                    marginBottom: '1rem',
                    color: '#5D5D5D',

                    '&:last-child': {
                        marginBottom: '0rem',
                    }
                }
            }
        }
    }
}))
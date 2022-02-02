import { Alert, Snackbar } from "@mui/material"

const Snack = ({snackOpen, snackClose}) =>{
    return(
        <Snackbar
            open={snackOpen}
            onClose={snackClose}
            autoHideDuration={1000}
        >
            <Alert severity="success">
                Added good
            </Alert>
        </Snackbar>
    )
}

export default Snack
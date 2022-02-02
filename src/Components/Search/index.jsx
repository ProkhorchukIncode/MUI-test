import { TextField } from "@mui/material"

const Search = () => {
    return(
        <>
            <TextField
                type='search'
                label='Search'
                fullWidth
                sx={{mb:'1rem'}}
            />
        </>
    )
}
export default Search
import TextField from "@mui/material/TextField"

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
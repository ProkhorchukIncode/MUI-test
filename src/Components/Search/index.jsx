import { useState, useEffect } from "react"
import { useDispatch} from "react-redux"
import { setSearch } from "../../Store/search/searchReducer"

import TextField from "@mui/material/TextField"

const Search = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const onChange=(event) => {
        setValue(event.target.value);
    }
    
    useEffect(()=> {
        dispatch(setSearch(value))
    },[dispatch,value])

    return(
        <>
            <TextField
                type='search'
                label='Search'
                fullWidth
                sx={{mb:'1rem'}}
                onChange={onChange}
            />
        </>
    )
}
export default Search
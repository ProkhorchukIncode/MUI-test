import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectSearch } from "../../Store/selectors"

import GoodsItem from "../GoodsItem/GoodsItem"

import Grid from "@mui/material/Grid"
import Pagination from "@mui/material/Pagination"

import goods from "../../goods"

const GoodsList = () => {
    const search = useSelector(selectSearch)
    const [filterGoods, setFilterGoods] = useState([])
    const perPage = 3
    const [paginationedGoods, setPaginationedGoods] = useState(goods.slice(0, perPage))
    const [page, setPage] = useState(1);

    const paginationCount = filterGoods.length/perPage
    const getPage = (page, array) => {
        if(page===1 || array.length<=3){
            return setPaginationedGoods(array.slice(0, perPage))
        }
        const pageInd = (page*perPage)-perPage
        return setPaginationedGoods(array.slice(pageInd, pageInd+perPage))
    }
    
    const handleChangePage = (event, page) => {
        setPage(page);
        getPage(page, filterGoods)
    };

    const onFiltered = (word)=>{
        const wordLowerCase = word.toLowerCase()
        const array = goods.filter(el=> el.name.toLowerCase().includes(wordLowerCase))
        setFilterGoods(array)
        getPage(page, array)
    }
    
    useEffect(()=>{
        onFiltered(search)
    }, [search])

    return(
        <Grid container spacing={2}>
            {paginationedGoods?.map(({id, name, description, price})=>{
                return <GoodsItem
                id={id}
                name={name}
                description={description}
                price={price}
                key={id}
                />
            })}
            {paginationCount>1 ? 
                (<Pagination 
                    variant="outlined"
                    count={paginationCount}
                    showFirstButton 
                    showLastButton
                    page={page}
                    onChange={handleChangePage}
                    sx={{mt:2, ml: 'auto', mr: 'auto'}}
                />)
                :
                <></>
            }
        </Grid>
    )
}
export default GoodsList
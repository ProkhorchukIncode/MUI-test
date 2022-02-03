import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectSearch } from "../../Store/selectors"

import GoodsItem from "../GoodsItem/GoodsItem"

import Grid from "@mui/material/Grid"

import goods from "../../goods"

const GoodsList = () => {
    const search = useSelector(selectSearch)
    const [filterGoods, setFilterGoods] = useState([])

    const onFiltered = (word)=>{
        const wordLowerCase = word.toLowerCase()
        const array = goods.filter(el=> el.name.toLowerCase().includes(wordLowerCase))
        setFilterGoods(array)
    }
    
    useEffect(()=>{
        onFiltered(search)
    }, [search])

    return(
        <Grid container spacing={2}>
            {filterGoods?.map(({id, name, description, price})=>{
                return <GoodsItem
                id={id}
                name={name}
                description={description}
                price={price}
                key={id}
                />
            })}
        </Grid>
    )
}
export default GoodsList
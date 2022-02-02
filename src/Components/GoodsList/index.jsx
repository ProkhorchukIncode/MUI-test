import GoodsItem from "../GoodsItem/GoodsItem"

import { Grid } from "@mui/material"

import goods from "../../goods"

const GoodsList = () => {
    return(
        <Grid container spacing={2}>
            {goods.map(({id, name, description, price})=>{
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
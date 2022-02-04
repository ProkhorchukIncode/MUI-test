import { useDispatch } from "react-redux"
import { deleteGoods } from "../../Store/goods/goodsReducer"
import styled from "styled-components"

import ListItem from "@mui/material/ListItem"
import IconButton from "@mui/material/IconButton"
import ListItemText from "@mui/material/ListItemText"
import Card from "@mui/material/Card"

import Close from "@mui/icons-material/Close"

const CardBox = styled(Card)`
    &&{
        padding: 10px;
        width: 100%;
    }
`
const PriceText = styled(ListItemText)`
    &&{
        color: red:
    }
`

const OrderItem =({id, name, price}) => {
    const dispatch = useDispatch()

    return(
        <ListItem>
            <CardBox>
                <ListItemText>
                    {name}
                </ListItemText>
                <PriceText>
                    {price}$
                </PriceText>
                <IconButton onClick={()=>dispatch(deleteGoods(id))}>
                    <Close/>
                </IconButton>
            </CardBox>
        </ListItem>
    )
}
export default OrderItem
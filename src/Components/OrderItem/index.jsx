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

const OrderItem =({id, name, price}) => {
    const dispatch = useDispatch()

    return(
        <ListItem>
            <CardBox>
                <ListItemText>
                    {name}
                </ListItemText>
                <ListItemText sx={{color: 'red'}}>
                    {price}$
                </ListItemText>
                <IconButton onClick={()=>dispatch(deleteGoods(id))}>
                    <Close/>
                </IconButton>
            </CardBox>
        </ListItem>
    )
}
export default OrderItem
import { useDispatch } from "react-redux"
import { deleteGoods } from "../../Store/goods/goodsReducer"

import ListItem from "@mui/material/ListItem"
import IconButton from "@mui/material/IconButton"
import ListItemText from "@mui/material/ListItemText"
import Card from "@mui/material/Card"

import Close from "@mui/icons-material/Close"

const OrderItem =({id, name, price}) => {
    const dispatch = useDispatch()

    return(
        <ListItem>
            <Card sx={{p: '10px'}}>
                <ListItemText>
                    {name}
                </ListItemText>
                <ListItemText sx={{color: 'red'}}>
                    {price}$
                </ListItemText>
                <IconButton onClick={()=>dispatch(deleteGoods(id))}>
                    <Close/>
                </IconButton>
            </Card>
        </ListItem>
    )
}
export default OrderItem
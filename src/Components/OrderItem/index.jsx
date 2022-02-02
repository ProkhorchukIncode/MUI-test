import { useDispatch } from "react-redux"
import { deleteGoods } from "../../Store/goods/goodsReducer"

import { ListItem, IconButton, ListItemText, Card } from "@mui/material"
import { Close } from "@mui/icons-material"

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
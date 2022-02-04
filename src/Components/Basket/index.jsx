import { useSelector } from "react-redux";
import { selectGoods } from "../../Store/selectors";

import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"

import ShoppingBasket from "@mui/icons-material/ShoppingBasket"

import OrderItem from "../OrderItem"
import ModalOrder from "../ModalOrder";
import OurSumm from "../OurSumm";
import NotOrders from "../NotOrders";

const Basket = ({cardOpen, closeCard}) => {
    const order = useSelector(selectGoods)
    const summ = order.reduce((acc,el) => {
        return acc + el.price
    },0)

    return(
        <Drawer
            anchor="right"
            open={cardOpen}
            onClose={closeCard}
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary='Basket' />
                </ListItem>
            </List>
            <Divider/>
            <List>
                {order.length 
                ?
                    (<>
                        {order.map(({id, name, description, price})=> {
                        return <OrderItem
                            key={id}
                            id={id}
                            name={name}
                            description={description}
                            price={price}
                        />
                        })}
                        <Divider/>
                        <OurSumm summ={summ}/>
                    </>)
                :
                    (<NotOrders/>)
                }
            </List>
            {order.length ?
                (<ModalOrder/>)
            :
                (<></>)
            }
        </Drawer>
    )
}
export default Basket
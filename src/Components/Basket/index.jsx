import { Drawer } from "@mui/material"
import { List } from "@mui/material"
import { ListItem } from "@mui/material"
import { ListItemIcon } from "@mui/material"
import { ListItemText } from "@mui/material"
import { Divider } from "@mui/material"

import { ShoppingBasket } from "@mui/icons-material"

import OrderItem from "../OrderItem"

const Basket = ({cardOpen, closeCard, order, removeFromOrder}) => {
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
                    </>)
                :
                    (<ListItemText primary='Not orders' sx={{ml:'1rem'}}/>)
                }
            </List>
        </Drawer>
    )
}
export default Basket
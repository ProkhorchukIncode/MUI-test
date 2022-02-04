import styled from "styled-components"

import ListItemText from "@mui/material/ListItemText"

const Text = styled(ListItemText)`
    && {
        text-align: center;
    }
`

const NotOrders = () => {
    return(
        <Text>
            Not orders
        </Text>
    )
}
export default NotOrders


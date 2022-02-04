import { useDispatch } from "react-redux"
import styled from "styled-components"

import { setGoods } from "../../Store/goods/goodsReducer"

import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import CardActions from "@mui/material/CardActions"

const CardBox = styled(Card)`
    &&{
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: ${(props)=> props.opacity=== 'shadow' ? '#e3e3e3' : ''};
        opacity: ${(props)=> props.opacity=== 'shadow' ? '0.7' : ''};
    }
`

const CardTitle = styled(Typography)`
    &&{
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.6;
    }
`

const GoodsItem = ({id, name, description, price, opacity}) => {
    const dispatch = useDispatch()

    const newId = `${Date.now()}+${id}`

    return(
        <Grid item md={4}>
            <CardBox id={id} opacity={opacity}>
                <CardContent>
                    <CardTitle>
                        Name: {name}
                    </CardTitle>
                    <Typography>
                    Description: {description}
                    </Typography>
                    <Typography>
                    Price: {price}$
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>dispatch(setGoods({
                        id: newId,
                        name,
                        price,
                    }))}>
                        Send
                    </Button>
                </CardActions>
            </CardBox>
        </Grid>
    )
}

export default GoodsItem
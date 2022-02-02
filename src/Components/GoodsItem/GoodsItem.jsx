import { useDispatch } from "react-redux"

import { setGoods } from "../../Store/goods/goodsReducer"

import { Grid, Card, CardContent, Typography, Button, CardActions } from "@mui/material"

const GoodsItem = ({id, name, description, price}) => {
    const dispatch = useDispatch()

    return(
        <Grid item xs={12} md={4}>
            <Card id={id}>
                <CardContent>
                    <Typography
                        variant="h6"
                        component='h5'
                    >
                        Name: {name}
                    </Typography>
                    <Typography>
                    Description:{description}
                    </Typography>
                    <Typography>
                    Price: {price}$
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>dispatch(setGoods({
                        id,
                        name,
                        price,
                    }))}>
                        Send
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default GoodsItem
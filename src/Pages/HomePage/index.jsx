import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectGoods } from "../../Store/selectors"

import Header from "../../Components/Header"
import Search from "../../Components/Search"
import GoodsList from "../../Components/GoodsList"
import Basket from "../../Components/Basket"
import Snack from "../../Components/Snack"

import Container from "@mui/material/Container"

const HomePage = () => {
    const [cardOpen, setCardOpen] = useState(false)
    const [snackOpen, setSnackOpen] = useState(false)
    const [pregoods, setPregoods] = useState([])

    const order = useSelector(selectGoods)
    
    const onSnackOpen = (goods) => {
        if(pregoods.length < goods.length){
            setSnackOpen(true)
        }
        setPregoods([...goods])
        return
    }

    useEffect(()=>{
        onSnackOpen(order)
    }, [order])

    return(
        <>
            <Header handleCard={()=> setCardOpen(true)}/>
            <Container 
                sx={{mt:'1rem'}}
            >
                <Search/>
                <GoodsList/>
            </Container>
            <Basket
                cardOpen={cardOpen}
                closeCard={()=> setCardOpen(false)}
            />
            <Snack
                snackOpen={snackOpen}
                snackClose={()=> setSnackOpen(false)}
            />
        </>
    )
}
export default HomePage
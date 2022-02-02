import { useState } from "react"

import NavBar from "../../Components/NavBar"
import Search from "../../Components/Search"
import GoodsList from "../../Components/GoodsList"
import Basket from "../../Components/Basket"

import { Container } from "@mui/material"

const HomePage = ({ourGoods}) => {
    const [cardOpen, setCardOpen] = useState(false)
    return(
        <>
            <NavBar handleCard={()=> setCardOpen(true)}/>
            <Container 
                sx={{mt:'1rem'}}
            >
                <Search/>
                <GoodsList/>
            </Container>
            <Basket
                cardOpen={cardOpen}
                closeCard={()=> setCardOpen(false)}
                order={ourGoods}
            />
        </>
    )
}
export default HomePage
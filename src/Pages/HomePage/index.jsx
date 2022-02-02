import { useState } from "react"

import Header from "../../Components/Header"
import Search from "../../Components/Search"
import GoodsList from "../../Components/GoodsList"
import Basket from "../../Components/Basket"

import Container from "@mui/material/Container"

const HomePage = () => {
    const [cardOpen, setCardOpen] = useState(false)
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
        </>
    )
}
export default HomePage
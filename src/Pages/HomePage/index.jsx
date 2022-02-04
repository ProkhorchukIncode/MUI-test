import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectGoods } from "../../Store/selectors"
import styled from "styled-components"

import Header from "../../Components/Header"
import Accions from "../../Components/Accions"
import Search from "../../Components/Search"
import GoodsList from "../../Components/GoodsList"
import Basket from "../../Components/Basket"
import Snack from "../../Components/Snack"

import Container from "@mui/material/Container"
import Skeleton from "@mui/material/Skeleton"
import Grid from "@mui/material/Grid"

const HeaderSkelet = styled(Skeleton)`
    && {
        height: 64px;
    }
`
const AccionsSkelet = styled(Skeleton)`
    && {
        height: 330px;
        margin-bottom: 20px;
    }
`
const SearchSkeleton = styled(Skeleton)`
    && {
        height: 54px;
        margin-bottom: 16px;
    }
`
const CardSkeleton = styled(Skeleton)`
    && {
        height: 165px;
    }
`

const StyledContainer = styled(Container)`
    && {
        padding-top: 20px;
    }
`

let loading = true
loading = false

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
        {loading ?
            (<>
                <HeaderSkelet variant="rectangular"/>
                <StyledContainer>
                    <AccionsSkelet variant="rectangular"/>
                    <SearchSkeleton variant="rectangular"/>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <CardSkeleton variant="rectangular"/>
                        </Grid>
                        <Grid item md={4}>
                            <CardSkeleton variant="rectangular"/>
                        </Grid>
                        <Grid item md={4}>
                            <CardSkeleton variant="rectangular"/>
                        </Grid>
                    </Grid>
                </StyledContainer>
            </>
            )
        :
            (<>
                <Header handleCard={()=> setCardOpen(true)}/>
                <StyledContainer>
                    <Accions/>
                    <Search/>
                    <GoodsList/>
                </StyledContainer>
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
        </>
    )
}
export default HomePage
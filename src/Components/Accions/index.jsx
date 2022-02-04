import { useState } from "react"
import styled from "styled-components"

import GoodsItem from "../GoodsItem/GoodsItem"

import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import CardHeader from "@mui/material/CardHeader"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import accions from "../../accions"

const CardStyled = styled(Card)`
    && {
        background: linear-gradient(90deg, rgba(36,0,28,0.38139005602240894) 0%, rgba(228,165,165,1) 58%, rgba(224,221,151,1) 100%);
        padding: 0 20px;
        margin-bottom: 20px;
    }
`
const CardTitle = styled(CardHeader)`
    && {
        text-align: center;
        color: green;
        font-size: 3rem;
    }
`
const GridContainer = styled(Grid)`
    && {
        margin-top: -32px;
        width: calc(100% + 32px);
        margin-left: -32px;
        padding: 16px;
    }
`
const FlexBox = styled(Box)`
    && {
        display: flex;
        justify-content: space-around;
    }
`
const NavigationButton = styled(Button)`
    && {
        padding: 4px;
        box-sizing: border-box;
        min-width: 32px;
        height: 32px;
        margin: 0 0 10px 0;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.23);
        color: green;
    }
`

const Accions = () => {
    const [activeStep, setActiveStep] = useState(0);

    const accionCard= accions[activeStep]
    const firstAccionCard = accions[0]
    const lastAccionCard = accions[accions.length-1]
    const prevAccionCard = accions[activeStep-1]
    const nextAccionCard = accions[activeStep+1]

    const handleNext = () => {
        if(activeStep===accions.length-1){
            return setActiveStep(0)
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        if(activeStep===0){
            return setActiveStep(accions.length-1)
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <CardStyled>
            <CardTitle title='Accions'/>
            <GridContainer container spacing={4} >
                {activeStep===0 ?
                    <GoodsItem
                    id={lastAccionCard.id}
                    name={lastAccionCard.name}
                    description={lastAccionCard.description}
                    price={lastAccionCard.price}
                    opacity={'shadow'}
                    />
                :
                    <GoodsItem
                    id={prevAccionCard.id}
                    name={prevAccionCard.name}
                    description={prevAccionCard.description}
                    price={prevAccionCard.price}
                    opacity={'shadow'}
                    />
                }
                <GoodsItem
                id={accionCard.id}
                name={accionCard.name}
                description={accionCard.description}
                price={accionCard.price}
                />
                {activeStep===accions.length-1 ?
                    <GoodsItem
                    id={firstAccionCard.id}
                    name={firstAccionCard.name}
                    description={firstAccionCard.description}
                    price={firstAccionCard.price}
                    opacity={'shadow'}
                    />
                :
                    <GoodsItem
                    id={nextAccionCard.id}
                    name={nextAccionCard.name}
                    description={nextAccionCard.description}
                    price={nextAccionCard.price}
                    opacity={'shadow'}
                    />
                }  
            </GridContainer>
            <FlexBox>
                <NavigationButton
                onClick={handleNext}
                >
                    <KeyboardArrowLeft />
                </NavigationButton>
                <NavigationButton 
                onClick={handleBack} 
                >
                    <KeyboardArrowRight />
                </NavigationButton>
            </FlexBox>
        </CardStyled>
    )
}
export default Accions
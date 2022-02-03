import { useState } from "react"

import GoodsItem from "../GoodsItem/GoodsItem"

import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import CardHeader from "@mui/material/CardHeader"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import accions from "../../accions"

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
        <Card sx={{pl: 2, pr: 2, mb: 2}}>
            <CardHeader title='Accions' sx={{textAlign: 'center', color: 'green'}}/>
            <Grid container spacing={4} sx={{p: 2}}>
                {activeStep===0 ?
                    <GoodsItem
                    id={lastAccionCard.id}
                    name={lastAccionCard.name}
                    description={lastAccionCard.description}
                    price={lastAccionCard.price}
                    />
                    :
                    <GoodsItem
                    id={prevAccionCard.id}
                    name={prevAccionCard.name}
                    description={prevAccionCard.description}
                    price={prevAccionCard.price}
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
                    />
                    :
                    <GoodsItem
                    id={nextAccionCard.id}
                    name={nextAccionCard.name}
                    description={nextAccionCard.description}
                    price={nextAccionCard.price}
                    />
                }  
            </Grid>
            <Box sx={{display: 'flex'}}>
                <Button
                size="small"
                onClick={handleNext}
                sx={{flexGrow: 1}}
                >
                    <KeyboardArrowLeft />
                </Button>
                <Button 
                size="small" 
                onClick={handleBack} 
                sx={{flexGrow: 1}}
                >
                    <KeyboardArrowRight />
                </Button>
            </Box>
        </Card>
    )
}
export default Accions
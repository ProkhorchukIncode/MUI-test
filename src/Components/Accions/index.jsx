import { useState } from "react"

import GoodsItem from "../GoodsItem/GoodsItem"

import { Card, Grid, CardHeader } from "@mui/material"
import { MobileStepper } from "@mui/material"
import { Box } from "@mui/material"
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import accions from "../../accions"

const Accions = () => {
    const [activeStep, setActiveStep] = useState(0);

    const maxSteps = accions.length
    const accionCard= accions[activeStep]

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Card sx={{pl: 2, pr: 2, mb: 2}}>
            <CardHeader title='Accions' sx={{textAlign: 'center', color: 'green'}}/>
            <Grid container spacing={4} sx={{p: 2}}>
                {activeStep===0 ?
                    <GoodsItem
                    sx={{}}
                    id={accions[accions.length-1].id}
                    name={accions[accions.length-1].name}
                    description={accions[accions.length-1].description}
                    price={accions[accions.length-1].price}
                    />
                    :
                    <GoodsItem
                    id={accions[activeStep-1].id}
                    name={accions[activeStep-1].name}
                    description={accions[activeStep-1].description}
                    price={accions[activeStep-1].price}
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
                    id={accions[0].id}
                    name={accions[0].name}
                    description={accions[0].description}
                    price={accions[0].price}
                    />
                    :
                    <GoodsItem
                    id={accions[activeStep+1].id}
                    name={accions[activeStep+1].name}
                    description={accions[activeStep+1].description}
                    price={accions[activeStep+1].price}
                    />
                }  
            </Grid>
            <MobileStepper 
                position="static"
                steps={maxSteps}
                activeStep={activeStep}
                nextButton={
                    <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                    >
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                    </Button>
                }
            />
        </Card>
    )
}
export default Accions
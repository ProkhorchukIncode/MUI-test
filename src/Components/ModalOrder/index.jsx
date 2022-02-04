import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { selectGoods } from "../../Store/selectors";
import { clearGoods } from "../../Store/goods/goodsReducer";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import DirectionsCar from "@mui/icons-material/DirectionsCar";
import DirectionsBike from "@mui/icons-material/DirectionsBike";
import DirectionsWalk from "@mui/icons-material/DirectionsWalk";
import CreditCard from "@mui/icons-material/CreditCard";
import Close from "@mui/icons-material/Close"
import LocalAtm from "@mui/icons-material/LocalAtm";
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '5%',
    boxShadow: 24,
    p: 4,
};

const Input = styled(TextField)`
    && {
        margin-bottom: 1rem;
    }
`

const ModalOrder = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [delivery, setDelivery] = useState('car')
    const [payment, setPayment] = useState('cash')
    const [discount, setDiscount] = useState(false)
    const [dateOfBirth, setDateOfBirth] = useState('2017-05-24')

    const order = useSelector(selectGoods)

    const summ = order.reduce((acc,el) => {
        return acc + el.price
    },0)
    
    const handlePayment = (event) => {
        setPayment(event.target.value);
    }

    const handleDelivery = (event, newDelivery) => {
        if (newDelivery !== null) {
          setDelivery(newDelivery);
        }
    };

    const handleChecked = (event) => {
        setChecked(event.target.checked);
        return setDiscount(!discount)
    };

    const onChange = (event) => {
        switch (event.target.name) {
            case "name":
                setName(event.target.value)
                break;
            case "address":
                setAddress(event.target.value)
                break;
            case "email":
                setEmail(event.target.value)
                break;
            case "phone":
                setPhone(event.target.value)
                break;
            default:
                break;
        }
    }

    const handleDateOfBirth = (event) => {
        setDateOfBirth(event.target.value)
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = () => {
        const dateOrder= new Date()
        const newObj = {
            dateOrder,
            delivery,
            name,
            address,
            email,
            phone,
            discount,
            order,
            dateOfBirth,
            summ
        }
        console.log(newObj);
        setOpen(false);
        dispatch(clearGoods())
    }

    return (
        <>
            <Button onClick={handleOpen}>Checkout</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} component='form'>
                    <Typography variant='h3' component='h2' sx={{textAlign: 'center', mb: 2}}>
                        Checkout
                    </Typography>
                    <Input
                        name='name'
                        label='Your name'
                        fullWidth
                        onChange={onChange}
                    />
                    <Input
                        name='address'
                        label='Your address'
                        fullWidth
                        onChange={onChange}
                    />
                    <Input
                        name='email'
                        type='email'
                        label='Your email'
                        fullWidth
                        onChange={onChange}
                    />
                    <Input
                        name='phone'
                        label='Your phone'
                        fullWidth
                        onChange={onChange}
                    />

                    <Typography sx={{textAlign: 'center', mb: 1}}>
                        Delivery method
                    </Typography>
                    <Stack 
                        direction='row'
                        sx={{justifyContent: 'center', mb: 1}}
                    >
                        <ToggleButtonGroup
                            value={delivery}
                            exclusive
                            onChange={handleDelivery}
                            aria-label='delivery'
                            sx={{display:'flex'}}
                        >
                            <ToggleButton value='car' aria-label='car'>
                                <DirectionsCar/>
                            </ToggleButton>
                            <ToggleButton value='bike' aria-label='bike'>
                                <DirectionsBike/>
                            </ToggleButton>
                            <ToggleButton value='pickup' aria-label='pickup'>
                                <DirectionsWalk/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>

                    <Typography sx={{textAlign: 'center', mb: 1}}>
                        Payment method
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <RadioGroup
                            row
                            onChange={handlePayment}
                            value={payment}
                        >
                            <FormControlLabel 
                                value="cash" 
                                label="Cash" 
                                control={<Radio 
                                    icon={<LocalAtm/>}
                                    checkedIcon={<LocalAtm/>}
                                />} 
                            />
                            <FormControlLabel 
                                value="card" 
                                label="Card" 
                                control={<Radio 
                                    icon={<CreditCard/>}
                                    checkedIcon={<CreditCard/>}
                                />} 
                            />
                        </RadioGroup>
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <FormControlLabel control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChecked}
                                inputProps={{ 'aria-label': 'controlled' }}
                                icon={<Close/>}
                                checkedIcon={<LoyaltyIcon />}
                            />
                            }
                            label='< Do you have a discount card?'
                        />
                    </Box>

                    <Box >
                        <Typography sx={{textAlign: 'center', mb: 2}}>
                            Enter your date of birth
                        </Typography>
                        <Box sx={{display: 'flex', justifyContent: 'center', mb: 1}}>
                            <TextField
                                id="date"
                                value={dateOfBirth}
                                onChange={handleDateOfBirth}
                                label="Birthday"
                                type="date"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{display: 'flex'}}>
                        <Button
                            onClick={onSubmit}
                            sx={{flexGrow: 1}}
                        >
                            Send
                        </Button>
                        <Button
                            onClick={handleClose}
                        >
                            Back to order
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
export default ModalOrder
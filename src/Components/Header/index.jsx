import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

const Header = ({handleCard}) => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography
                variant='h4'
                component='p'
                sx={{flexGrow: 1}}
            >
                My shop
            </Typography>
            <IconButton
                color='inherit'
                onClick={handleCard}
            >
                <ShoppingBasket/>
            </IconButton>
        </Toolbar>
    </AppBar>
  );
};
export default Header;
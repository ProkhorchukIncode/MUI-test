import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography } from '@mui/material';

import { ShoppingBasket } from '@mui/icons-material';

const NavBar = ({handleCard}) => {
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
export default NavBar;
import { useSelector } from 'react-redux';
import { selectGoods } from '../../Store/selectors';
import styled from 'styled-components';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ShoppingBasket from '@mui/icons-material/ShoppingBasket';

const Logo = styled(Typography)`
    && {
        font-size: 2.125rem;
        line-height: 1.235;
        flex-grow: 1;
    }  
`

const Header = ({handleCard}) => {
    const order = useSelector(selectGoods)

  return (
    <AppBar position='static'>
        <Toolbar>
            <Logo>
                My shop
            </Logo>
            <IconButton
                color='inherit'
                onClick={handleCard}
            >
                <ShoppingBasket/>
                <Badge
                    color='secondary'
                    badgeContent={order.length}
                />
            </IconButton>
        </Toolbar>
    </AppBar>
  );
};
export default Header;
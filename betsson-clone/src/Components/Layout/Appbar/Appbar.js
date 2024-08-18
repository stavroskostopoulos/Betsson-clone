import React from 'react';
import './Appbar.css';
import { ReactComponent as Logo } from '../../../Assets/Images/betsson_logo.svg';

// Material UI components
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';

function Appbar() {

    
    const [anchorElNav, setAnchorElNav] = React.useState(null); 
    
    const handleOpenNavMenu = (event) => {    
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = ['ΣΤΟΙΧΗΜΑ',
        'Live ΣΤΟΙΧΗΜΑ',
        'Casino',
        'Live Casino',
        'Poker',
        'Virtual Sports',
        'ΠΡΟΣΦΟΡΕΣ',
        'VIP Club',
        'ΕΦΑΡΜΟΓΕΣ',
        'Betsson Radio',
        'Blog'
    ];  

    return (
        <div className='appbar__container'>
            <div className='toolbar__container'>
                <div className='logo__container'>
                    <Logo />
                </div>
                <div className='tools_container'>
                    {/* <h3>Eimai malkas</h3> */}
                    <IconButton aria-label='delete' size='large' className='tool__button'>
                        EL
                    </IconButton>
                    <IconButton aria-label='delete' size='large' className='tool__button'>
                        <HelpIcon className='tool__button_icon'/>
                    </IconButton>
                    <Button variant='outlined' className='tool__button__sign sign__in__button' size='medium'>Σύνδεση</Button>
                    <Button variant='contained' color='success' className='tool__button__sign  sign__up__button' size='medium'>Εγγραφή</Button>                
                </div>
            </div>
            
            
            <div className='navigation__container'>

                <AppBar position="static" className='appbar__wrapper'>
                    <Container maxWidth="xl" className='appbar__menu__container'>
                        <Toolbar disableGutters className='appbar__menu__toolbar'>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                    
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    className='appbar__menu_button'
                                >
                                    <Typography className='appbar__menu__text'>{page}</Typography>
                                </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        </div>
    )
}

export default Appbar;
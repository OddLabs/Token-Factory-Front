import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, AppBar, Toolbar, Typography, Menu, Container, Box } from '@mui/material/';
import Wallet from './Wallet';
import logo from '../images/logo.webp';
import '@fontsource/orbitron';

const pages = [{ menuName: 'Home', route: '/' }, { menuName: 'ERC20 Generator', route: '/generate-erc20' }];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  const handleItemClick = (route) => {
    navigate(route);
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0a0f26', boxShadow: '0 0 10px #00ff99', minHeight: 80 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 80, justifyContent: 'space-between' }}>
          {/* Logo and OddLabs text together */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                height: 80,
                background: 'linear-gradient(135deg, #0a0f26 0%, #00ff99 100%)',
                padding: '10px',
                borderRadius: '8px',
              }}
            >
              <Box
                component="img"
                src={logo} 
                alt="OddLabs Logo"
                sx={{
                  height: '100%',
                }}
              />
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: 'Orbitron',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#00ff99',
                textDecoration: 'none',
                fontSize: { xs: '1rem', md: '1.5rem' }, // Tamanho da fonte ajustado
              }}
            >
              OddLabs
            </Typography>
          </Box>

          {/* Menu for mobile devices */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#00ff99' }}
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
                <Button 
                  key={page.menuName}  
                  onClick={() => {
                    handleItemClick(page.route);
                  }}
                  sx={{ color: '#00ff99', fontFamily: 'Orbitron' }}
                >
                  {page.menuName}
                </Button>
              ))}
            </Menu>
          </Box>

          {/* Menu for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button 
                key={page.menuName} 
                sx={{ color: '#00ff99', fontFamily: 'Orbitron' }}
                onClick={() => {
                  handleItemClick(page.route);
                }}
              >
                {page.menuName}
              </Button>
            ))}
          </Box>

          {/* Wallet component displayed on all screen sizes */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Wallet />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

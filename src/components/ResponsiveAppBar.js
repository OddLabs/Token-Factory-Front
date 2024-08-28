import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, AppBar, Toolbar, Typography, Menu, Container, Box } from '@mui/material/';
import Wallet from './Wallet';
import logo from '../images/logo.webp';
import '@fontsource/orbitron';

const pages = [{ menuName: 'Home', route: '/' }, { menuName: 'ERC20 Genrerator', route: '/generate-erc20' }];

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
    <AppBar position="static" sx={{ backgroundColor: '#0a0f26', boxShadow: '0 0 10px #00ff99' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
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

          {/* Logo for smaller screens */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              height: 60,
              background: 'linear-gradient(135deg, #0a0f26 0%, #00ff99 100%)',
              padding: '5px',
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

          {/* OddLabs text */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Orbitron',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#00ff99',
              textDecoration: 'none',
            }}
          >
            OddLabs
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Orbitron',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#00ff99',
              textDecoration: 'none',
            }}
          >
            OddLabs
          </Typography>

          {/* Menu for mobile devices */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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

          <Wallet />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

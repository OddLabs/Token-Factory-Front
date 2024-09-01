import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, AppBar, Toolbar, Typography, Menu, MenuItem, Container, Box } from '@mui/material/';
import Wallet from './Wallet';
import logo from '../images/logo.webp';
import '@fontsource/orbitron';

const pages = [
  { menuName: 'Home', route: '/' },
  { menuName: 'About Us', route: '/about' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElGenerators, setAnchorElGenerators] = React.useState(null);
  const [anchorElApi, setAnchorElApi] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenGeneratorsMenu = (event) => {
    setAnchorElGenerators(event.currentTarget);
  };

  const handleCloseGeneratorsMenu = () => {
    setAnchorElGenerators(null);
  };

  const handleOpenApiMenu = (event) => {
    setAnchorElApi(event.currentTarget);
  };

  const handleCloseApiMenu = () => {
    setAnchorElApi(null);
  };

  const navigate = useNavigate();

  const handleItemClick = (route) => {
    navigate(route);
    handleCloseNavMenu();
    handleCloseGeneratorsMenu();
    handleCloseApiMenu();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0a0f26', boxShadow: '0 0 10px #00ff99', minHeight: 80 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 80, justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>

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
                fontSize: { xs: '1rem', md: '1.5rem' },
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
                '& .MuiPaper-root': {
                  backgroundColor: '#0a0f26',
                  color: '#00ff99',
                  boxShadow: '0 0 10px #00ff99',
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.menuName}
                  onClick={() => handleItemClick(page.route)}
                  sx={{ color: '#00ff99', fontFamily: 'Orbitron' }}
                >
                  {page.menuName}
                </Button>
              ))}
              <Button
                onClick={handleOpenGeneratorsMenu}
                sx={{ color: '#00ff99', fontFamily: 'Orbitron' }}
              >
                GUI TOOLS
              </Button>
              <Menu
                id="menu-generators"
                anchorEl={anchorElGenerators}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElGenerators)}
                onClose={handleCloseGeneratorsMenu}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: '#0a0f26',
                    color: '#00ff99',
                    boxShadow: '0 0 10px #00ff99',
                  },
                }}
              >
                <MenuItem
                  onClick={() => handleItemClick('/erc20')}
                  sx={{
                    fontFamily: 'Orbitron',
                    '&:hover': {
                      backgroundColor: '#00ff99',
                      color: '#0a0f26',
                    }
                  }}
                >
                  ERC-20 Generator
                </MenuItem>
                <MenuItem
                  onClick={() => handleItemClick('/erc721')}
                  sx={{
                    fontFamily: 'Orbitron',
                    '&:hover': {
                      backgroundColor: '#00ff99',
                      color: '#0a0f26',
                    }
                  }}
                >
                  ERC-721 Generator
                </MenuItem>
              </Menu>

              <Button
                onClick={handleOpenApiMenu}
                sx={{ color: '#00ff99', fontFamily: 'Orbitron' }}
              >
                API
              </Button>
              <Menu
                id="menu-api"
                anchorEl={anchorElApi}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElApi)}
                onClose={handleCloseApiMenu}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: '#0a0f26',
                    color: '#00ff99',
                    boxShadow: '0 0 10px #00ff99',
                  },
                }}
              >
                <MenuItem
                  onClick={() => handleItemClick('/developers-api/evm-operations')}
                  sx={{
                    fontFamily: 'Orbitron',
                    '&:hover': {
                      backgroundColor: '#00ff99',
                      color: '#0a0f26',
                    }
                  }}
                >
                  EVM Operations
                </MenuItem>
                <MenuItem
                  onClick={() => handleItemClick('/developers-api/signed-transactions')}
                  sx={{
                    fontFamily: 'Orbitron',
                    '&:hover': {
                      backgroundColor: '#00ff99',
                      color: '#0a0f26',
                    }
                  }}
                >
                  Signed Transactions
                </MenuItem>
                <MenuItem
                  onClick={() => handleItemClick('/developers-api/contract-interactions')}
                  sx={{
                    fontFamily: 'Orbitron',
                    '&:hover': {
                      backgroundColor: '#00ff99',
                      color: '#0a0f26',
                    }
                  }}
                >
                  Contract Interactions
                </MenuItem>
              </Menu>
            </Menu>
          </Box>

          {/* Menu for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.menuName}
                sx={{ color: '#00ff99', fontFamily: 'Orbitron' }}
                onClick={() => handleItemClick(page.route)}
              >
                {page.menuName}
              </Button>
            ))}
            <Button
              onClick={handleOpenGeneratorsMenu}
              sx={{ color: '#00ff99', fontFamily: 'Orbitron' }}
            >
              GUI TOOLS
            </Button>
            <Menu
              id="menu-generators"
              anchorEl={anchorElGenerators}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElGenerators)}
              onClose={handleCloseGeneratorsMenu}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: '#0a0f26',
                  color: '#00ff99',
                  boxShadow: '0 0 10px #00ff99',
                },
              }}
            >
              <MenuItem
                onClick={() => handleItemClick('/erc20')}
                sx={{
                  fontFamily: 'Orbitron',
                  '&:hover': {
                    backgroundColor: '#00ff99',
                    color: '#0a0f26',
                  }
                }}
              >
                ERC-20 Generator
              </MenuItem>
              <MenuItem
                onClick={() => handleItemClick('/erc721')}
                sx={{
                  fontFamily: 'Orbitron',
                  '&:hover': {
                    backgroundColor: '#00ff99',
                    color: '#0a0f26',
                  }
                }}
              >
                ERC-721 Generator
              </MenuItem>
            </Menu>

            <Button
              onClick={handleOpenApiMenu}
              sx={{ color: '#00ff99', fontFamily: 'Orbitron' }}
            >
              API
            </Button>
            <Menu
              id="menu-api"
              anchorEl={anchorElApi}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
              }}
              open={Boolean(anchorElApi)}
              onClose={handleCloseApiMenu}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: '#0a0f26',
                  color: '#00ff99',
                  boxShadow: '0 0 10px #00ff99',
                },
              }}
            >
              <MenuItem
                onClick={() => handleItemClick('/evm-operations')}
                sx={{
                  fontFamily: 'Orbitron',
                  '&:hover': {
                    backgroundColor: '#00ff99',
                    color: '#0a0f26',
                  }
                }}
              >
                EVM Operations
              </MenuItem>
              <MenuItem
                onClick={() => handleItemClick('/signed-transactions')}
                sx={{
                  fontFamily: 'Orbitron',
                  '&:hover': {
                    backgroundColor: '#00ff99',
                    color: '#0a0f26',
                  }
                }}
              >
                Signed Transactions
              </MenuItem>
              <MenuItem
                onClick={() => handleItemClick('/contract-interactions')}
                sx={{
                  fontFamily: 'Orbitron',
                  '&:hover': {
                    backgroundColor: '#00ff99',
                    color: '#0a0f26',
                  }
                }}
              >
                Contract Interactions
              </MenuItem>
            </Menu>
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

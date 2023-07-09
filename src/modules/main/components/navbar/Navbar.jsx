import './navbar.scss';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useAppStore } from '@/hooks';
import { Box, Button } from '@mui/material';
import { useRouting } from '@/hooks';
import { MENU_OPTIONS } from '@/helpers/modules/menuOptions';
import AppLogo from '@/assets/images/logo.png';

export const Navbar = () => {
  const { mobileOpen, changeMobileOpen } = useAppStore();
  const {
    navigate,
    isRouteSelected,
  } = useRouting();
  const handleDrawerToggle = () => {
    changeMobileOpen(!mobileOpen);
  };

  return (
    <Toolbar sx={{ color: 'white' }}>
      <Box
        className="left-center"
      >
        <Box
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <img
            className="app-logo"
            src={AppLogo}
            alt="cryptocurrency-app-logo"
          />
        </Box>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon/>
        </IconButton>
      </Box>
      <Box
        className="content-center menu-option__container"
        sx={{ width: { xs: '100%' } }}
      >
        <Box className="mb-1" sx={{ display: { xs: 'none', md: 'flex' } }}>
          {
            MENU_OPTIONS.map((menuOption, index) => (
              <Box key={`top-${menuOption.to}-${index + 1}`}>
                <Button
                  className="no-shadow menu-option"
                  variant="contained"
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': { backgroundColor: 'primary.main' },
                    fontWeight: 700,
                    borderBottom: isRouteSelected(menuOption.to) ?
                      'solid white 1px' : 'none',
                  }}
                  onClick={() => navigate(menuOption.to)}
                >
                  {menuOption.title}
                </Button>
              </Box>
            ))
          }
        </Box>
      </Box>
      <Box
        className="content-left"
        sx={{ display: { md: 'none' } }}
      >
        <img
          className="app-logo"
          src={AppLogo}
          alt="cryptocurrency-app-logo"
        />
      </Box>
    </Toolbar>
  );
};

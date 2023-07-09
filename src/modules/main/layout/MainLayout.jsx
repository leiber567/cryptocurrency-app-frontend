import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon,
} from '@mui/material';
import { Navbar } from '@/modules/main/components';
import {
  useAppStore,
  useRouting,
} from '@/hooks';
import { MENU_OPTIONS } from '@/helpers/modules/menuOptions';

const Layout = (props) => {
  const { window } = props;
  const { navigate } = useRouting();
  const location = useLocation();
  const { mobileOpen, changeMobileOpen, changeInventoryList } = useAppStore();

  const handleDrawerToggle = () => {
    changeMobileOpen(!mobileOpen);
  };

  const closeToggle = () => {
    changeMobileOpen(false);
  };

  const isSelected = (menuPath) => {
    return location.pathname.includes(menuPath);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box
      className="h-100 d-flex p-0 flex-column"
      sx={{ backgroundColor: 'primary.main', color: 'white' }}
    >
      <Toolbar sx={{ display: { xs: 'none', md: 'block' } }}/>
      <List className="px-1 w-100">
        {MENU_OPTIONS.map((menuOption, index) => (
          <Box key={`${menuOption.to}-${index}`}>
            <ListItem className="my-1" disablePadding>
              <ListItemButton
                className="pe-0 w-100 no-shadow"
                onClick={() => {
                  navigate(menuOption.to);
                  closeToggle();
                }}
              >
                <ListItemIcon
                  className={`${isSelected(menuOption.to) ? 'menu-icon' : ''}`}
                >
                  {menuOption.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color: isSelected(menuOption.to) ? 'secondary.main' : '',
                  }}
                  primary={menuOption.title}
                />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}/>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline/>
      <AppBar
        className="p-0"
        position="fixed"
        sx={{
          zIndex: { md: 9999 },
        }}
      >
        <Navbar/>
        <Divider/>
      </AppBar>
      <Box
        component="nav"
        sx={{ display: { md: 'none' }, flexShrink: { md: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
            },
          }}
        >
          <Box
            className="py-2 d-flex"
            sx={{
              backgroundColor: 'primary.main',
            }}
          >
            <Box
              sx={{
                padding: '0.5rem 0'
              }}
            >
              <Typography
                className="font-weight-700"
                variant="h5"
                sx={{
                  color: 'primary.contrastText',
                  fontWeight: 700,
                  textAlign: 'center'
                }}
              >
                Cryptocurrency APP
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              marginBottom: '1px',
              borderColor: 'primary.main',
              borderWidth: '2px',
              opacity: 1,
            }}
          />
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3
        }}
      >
        <Toolbar/>
        <Outlet/>
      </Box>
    </Box>
  );
};

export default Layout;

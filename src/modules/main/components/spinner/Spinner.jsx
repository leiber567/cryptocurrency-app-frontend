import { Backdrop, CircularProgress } from '@mui/material';

export const Spinner = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1000 }}
      open={open}
    >
      <CircularProgress color="inherit"/>
    </Backdrop>
  );
};
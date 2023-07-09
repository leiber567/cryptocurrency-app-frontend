import { useDispatch, useSelector } from 'react-redux';
import {
  setMobileOpen,
} from '@/store';

export const useAppStore = () => {
  const {
    mobileOpen,
  } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const changeMobileOpen = (mobileOpenValue) => {
    dispatch(setMobileOpen(mobileOpenValue));
  };

  return {
    //* Properties
    mobileOpen,

    //* Methods
    changeMobileOpen,
  };
};
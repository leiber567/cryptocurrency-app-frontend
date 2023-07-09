import { useLocation, useNavigate } from 'react-router-dom';
import { PATH_ADMIN_LAYOUT } from '@/helpers/appHelper.js';

export const useRouting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => {
    navigate(-1);
  };
  const goToBaseRoute = () => {
    navigate('');
  };
  const goToAdminRoute = (routeName, queryParams) => {
    const navigateParams = {
      pathname: `${PATH_ADMIN_LAYOUT}/${routeName}`,
    };
    if (queryParams) {
      navigateParams.search = queryParams;
    }
    navigate(navigateParams);
  };
  const isRouteSelected = (menuPath) => {
    return location.pathname.includes(menuPath);
  };
  return {
    navigate,
    goBack,
    goToBaseRoute,
    goToAdminRoute,
    isRouteSelected,
  };
};
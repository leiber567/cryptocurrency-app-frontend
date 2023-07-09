import { Navigate, Route, Routes } from 'react-router-dom';
import {
  MainLayout,
  CalculatorCryptocurrency,
  MetricsCryptocurrency
} from '@/modules/main';
import {
  DEFAULT_HOME_ROUTE,
  PATH_ADMIN_LAYOUT,
} from '@/helpers/appHelper';


const AppRouter = () => {
  return (
    <Routes>
      <Route path={PATH_ADMIN_LAYOUT} element={<MainLayout/>}>
        <Route index element={ <Navigate to="calculator" /> } />
        <Route
          path="calculator"
          element={<CalculatorCryptocurrency/>}
        />
        <Route
          path="metrics"
          element={<MetricsCryptocurrency/>}
        />
      </Route>
      <Route path="/*" element={<Navigate to={DEFAULT_HOME_ROUTE}/>}/>
    </Routes>
  );
};

export default AppRouter;

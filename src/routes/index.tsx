import { useRoutes } from 'react-router';
import mainRoutes from './mainRoutes';
import authenticationRoutes from './authenticationRoutes';
import errorRoutes from './errorRoutes';

export default function ThemeRoutes() {
  return useRoutes([mainRoutes, authenticationRoutes, errorRoutes]);
}

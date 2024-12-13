import { useRoutes } from 'react-router';
import mainRoutes from './mainRoutes';
import authenticationRoutes from './authenticationRoutes';

export default function ThemeRoutes() {
  return useRoutes([mainRoutes, authenticationRoutes]);
}

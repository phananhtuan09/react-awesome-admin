import { RouteObject, Outlet } from 'react-router';
import { lazy, createElement } from 'react';
import LazyWrapper from '@/components/ui/lazyWrapper';
import { ROUTE_CONFIG } from '@/constants/path';

const LoginPage = LazyWrapper(lazy(() => import('@/pages/login')));

const authenticationRoutes: RouteObject = {
  path: ROUTE_CONFIG.ROOT,
  element: createElement(Outlet),
  children: [
    {
      path: ROUTE_CONFIG.LOGIN,
      element: createElement(LoginPage),
    },
  ],
};

export default authenticationRoutes;

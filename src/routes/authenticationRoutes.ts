import { RouteObject, Outlet } from 'react-router';
import { lazy, createElement } from 'react';
import LazyWrapper from '@/components/ui/lazyWrapper';

const LoginPage = LazyWrapper(lazy(() => import('@/pages/login')));

const authenticationRoutes: RouteObject = {
  path: '/',
  element: createElement(Outlet),
  children: [
    {
      path: 'login',
      element: createElement(LoginPage),
    },
  ],
};

export default authenticationRoutes;

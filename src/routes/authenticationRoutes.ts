import { RouteObject, Outlet } from 'react-router';
import { lazy, createElement } from 'react';
import LazyWrapper from '@/components/ui/lazyWrapper';
import PATH from '@/constants/path';

const LoginPage = LazyWrapper(lazy(() => import('@/pages/login')));

const authenticationRoutes: RouteObject = {
  path: PATH.ROOT,
  element: createElement(Outlet),
  children: [
    {
      path: PATH.LOGIN,
      element: createElement(LoginPage),
    },
  ],
};

export default authenticationRoutes;

import { RouteObject } from 'react-router';
import { lazy, createElement } from 'react';
import LazyWrapper from '@/components/ui/lazyWrapper';
import PATH from '@/constants/path';

const HomePage = LazyWrapper(lazy(() => import('@/pages/home')));
const MainLayout = LazyWrapper(lazy(() => import('@/layout/mainLayout')));

const mainRoutes: RouteObject = {
  path: PATH.ROOT,
  element: createElement(MainLayout),
  children: [
    {
      path: PATH.HOME,
      element: createElement(HomePage),
    },
  ],
};

export default mainRoutes;

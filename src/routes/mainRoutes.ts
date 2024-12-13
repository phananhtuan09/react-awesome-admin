import { RouteObject } from 'react-router';
import { lazy, createElement } from 'react';
import LazyWrapper from '@/components/ui/lazyWrapper';

const HomePage = LazyWrapper(lazy(() => import('@/pages/home')));
const MainLayout = LazyWrapper(lazy(() => import('@/layout/mainLayout')));

const mainRoutes: RouteObject = {
  path: '/',
  element: createElement(MainLayout),
  children: [
    {
      path: 'home',
      element: createElement(HomePage),
    },
  ],
};

export default mainRoutes;

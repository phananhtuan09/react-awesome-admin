import { RouteObject } from 'react-router';
import { lazy, createElement } from 'react';
import LazyWrapper from '@/components/ui/lazyWrapper';
import { ROUTE_CONFIG, ROOT_PATH } from '@/constants/path';

const HomePage = LazyWrapper(lazy(() => import('@/pages/home')));
const ProfilePage = LazyWrapper(lazy(() => import('@/pages/profile')));
const MainLayout = LazyWrapper(lazy(() => import('@/layout/mainLayout')));

const mainRoutes: RouteObject = {
  path: ROOT_PATH,
  element: createElement(MainLayout),
  children: [
    {
      path: ROUTE_CONFIG.HOME,
      element: createElement(HomePage),
    },
    {
      path: ROUTE_CONFIG.PROFILE,
      element: createElement(ProfilePage),
    },
  ],
};

export default mainRoutes;

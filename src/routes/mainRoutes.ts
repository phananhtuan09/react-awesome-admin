import { RouteObject } from 'react-router';
import { lazy, createElement } from 'react';
import LazyWrapper from '@/components/ui/lazyWrapper';
import PATH, { PATH2 } from '@/constants/path';

const HomePage = LazyWrapper(lazy(() => import('@/pages/home')));
const ProfilePage = LazyWrapper(lazy(() => import('@/pages/profile')));
const MainLayout = LazyWrapper(lazy(() => import('@/layout/mainLayout')));

console.log('PATH2', PATH2);

const mainRoutes: RouteObject = {
  path: PATH.ROOT,
  element: createElement(MainLayout),
  children: [
    {
      path: PATH.HOME,
      element: createElement(HomePage),
    },
    {
      path: PATH.PROFILE,
      element: createElement(ProfilePage),
    },
  ],
};

export default mainRoutes;

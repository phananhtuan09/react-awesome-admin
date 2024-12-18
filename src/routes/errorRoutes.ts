import { RouteObject, Outlet } from 'react-router';
import { lazy, createElement } from 'react';
import LazyWrapper from '@/components/ui/lazyWrapper';
import { NOT_FOUND_PATH, ROUTE_CONFIG } from '@/constants/path';

const NotfoundPage = LazyWrapper(lazy(() => import('@/pages/notfound')));

const authenticationRoutes: RouteObject = {
  path: ROUTE_CONFIG.ROOT,
  element: createElement(Outlet),
  children: [
    {
      path: NOT_FOUND_PATH,
      element: createElement(NotfoundPage),
    },
  ],
};

export default authenticationRoutes;

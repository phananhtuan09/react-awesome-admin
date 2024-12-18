import { RouteObject } from 'react-router';
import { lazy, createElement } from 'react';
import LazyWrapper from '@/components/ui/lazyWrapper';
import { PATH, ROUTE_CONFIG, ROOT_PATH } from '@/constants/path';

const HomePage = LazyWrapper(lazy(() => import('@/pages/home')));
const ProfilePage = LazyWrapper(lazy(() => import('@/pages/profile')));
const AdminPage = LazyWrapper(lazy(() => import('@/pages/admin')));
const AdminUserPage = LazyWrapper(lazy(() => import('@/pages/admin/users')));
const AdminUserAddPage = LazyWrapper(
  lazy(() => import('@/pages/admin/users/add')),
);
const AdminUserEditPage = LazyWrapper(
  lazy(() => import('@/pages/admin/users/edit')),
);

const MainLayout = LazyWrapper(lazy(() => import('@/layout/mainLayout')));

console.log({ PATH, ROUTE_CONFIG, ROOT_PATH });

const mainRoutes: RouteObject = {
  path: ROUTE_CONFIG.ROOT,
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
    {
      path: ROUTE_CONFIG.ADMIN,
      element: createElement(AdminPage),
      children: [
        {
          path: ROUTE_CONFIG.ADMIN_USER,
          element: createElement(AdminUserPage),
          children: [
            {
              path: ROUTE_CONFIG.ADMIN_USER_ADD_USER,
              element: createElement(AdminUserAddPage),
            },
            {
              path: ROUTE_CONFIG.ADMIN_USER_EDIT_USER,
              element: createElement(AdminUserEditPage),
            },
          ],
        },
      ],
    },
  ],
};

export default mainRoutes;

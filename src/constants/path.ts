import { generatePath } from '@/lib/utils';
import { Route } from '@/types/common';

const ROOT_PATH = '/';

const defineRoutes = [
  {
    path: '',
    name: 'ROOT',
  },
  {
    path: 'login',
    name: 'LOGIN',
  },
  {
    path: 'register',
    name: 'REGISTER',
  },
  {
    path: 'admin',
    name: 'ADMIN',
    subRoutes: [
      {
        path: 'home',
        name: 'HOME',
      },
      {
        path: 'profile',
        name: 'PROFILE',
      },
      {
        path: 'users',
        name: 'USER',
        subRoutes: [
          {
            path: 'add',
            name: 'ADD_USER',
          },
          {
            path: 'edit/:id',
            name: 'EDIT_USER',
          },
        ],
      },
    ],
  },
] as const;

function generateAbsolutePath(
  routes: ReadonlyArray<Route>,
  parentPath: string = '',
): Record<string, string> {
  return routes.reduce((acc, route) => {
    const currentPath = `${parentPath}/${route.path}`.replace(/\/+/g, '/'); // Ensure no double slashes
    acc[route.name] = currentPath;

    if (route.subRoutes) {
      Object.assign(acc, generateAbsolutePath(route.subRoutes, currentPath));
    }

    return acc;
  }, {} as Record<string, string>);
}

// used for define routes
const ROUTE_CONFIG = generateAbsolutePath(defineRoutes);
// used for components ex redirect, link
const PATH = generatePath(defineRoutes);

export { PATH, ROUTE_CONFIG, ROOT_PATH };

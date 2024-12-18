import { generateFullPath, generateRoutePath } from '@/lib/utils';

const ROOT_PATH = '/';
const NOT_FOUND_PATH = '*';

const routeSettings = [
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
    path: 'home',
    name: 'HOME',
  },
  {
    path: 'profile',
    name: 'PROFILE',
  },
  {
    path: 'admin',
    name: 'ADMIN',
    subRoutes: [
      {
        path: 'users',
        name: 'USER',
        subRoutes: [
          {
            path: 'add',
            name: 'ADD_USER',
          },
          {
            path: 'edit',
            name: 'EDIT_USER',
            suffixPath: '/:id',
          },
        ],
      },
    ],
  },
] as const;

// used for define routes
const ROUTE_CONFIG = generateRoutePath(routeSettings);

// used for components ex redirect, link
const PATH = generateFullPath(routeSettings);

export { PATH, ROUTE_CONFIG, ROOT_PATH, NOT_FOUND_PATH };

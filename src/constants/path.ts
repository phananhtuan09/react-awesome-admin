const PATH = {
  // public routes
  LOGIN: 'login',
  REGISTER: 'register',
  NOT_FOUND: '404',
  // private routes
  ROOT: '/',
  HOME: 'home',
  PROFILE: 'profile',
};

type Route = {
  path: string;
  name: string;
  subRoutes?: ReadonlyArray<Route>;
};

type GenerateKeys<
  T extends ReadonlyArray<Route>,
  Prefix extends string = '',
> = {
  [K in keyof T]: T[K] extends Route
    ? T[K]['subRoutes'] extends ReadonlyArray<Route>
      ? // Include current key and recursively generate keys for subRoutes
        | `${Prefix}${T[K]['name']}`
          | GenerateKeys<T[K]['subRoutes'], `${Prefix}${T[K]['name']}_`>
      : // If no subRoutes, only include the current key
        `${Prefix}${T[K]['name']}`
    : never;
}[number];

function generatePath<T extends ReadonlyArray<Route>>(
  paths: T,
  prefixPath = '',
  prefixName = '',
): { [K in GenerateKeys<T>]: string } {
  const result = {} as { [K in GenerateKeys<T>]: string };

  if (!Array.isArray(paths)) {
    return result;
  }

  paths.forEach((path) => {
    const pathName = prefixName ? `${prefixName}_${path.name}` : path.name;
    const newPath = `${prefixPath}/${path.path}`;
    result[pathName as GenerateKeys<T>] = newPath;

    if (path.subRoutes) {
      Object.assign(result, generatePath(path.subRoutes, newPath, pathName));
    }
  });

  return result;
}

// Your route definition
const definePath = [
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
        name: 'USERS',
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

// Generate the PATH object with dynamic typing
const PATH2 = generatePath(definePath);

export { PATH2 };

export default PATH;

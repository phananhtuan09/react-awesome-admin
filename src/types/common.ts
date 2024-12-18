export type Route = {
  path: string;
  name: string;
  subRoutes?: ReadonlyArray<Route>;
};

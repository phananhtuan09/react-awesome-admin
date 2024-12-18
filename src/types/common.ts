export type Route = {
  path: string;
  name: string;
  suffixPath?: string;
  subRoutes?: ReadonlyArray<Route>;
};

import { Route } from '@/types/common';

type PrefixedName<
  Prefix extends string,
  Name extends string,
> = Prefix extends '' ? Name : `${Prefix}${Name}`;

type GenerateKeysForRoute<
  R extends Route,
  Prefix extends string = '',
> = R['subRoutes'] extends ReadonlyArray<Route>
  ?
      | PrefixedName<Prefix, R['name']>
      | GenerateKeyRoutes<R['subRoutes'], `${PrefixedName<Prefix, R['name']>}_`>
  : PrefixedName<Prefix, R['name']>;

export type GenerateKeyRoutes<
  RouteArray extends ReadonlyArray<Route>,
  Prefix extends string = '',
> = {
  [Index in keyof RouteArray]: RouteArray[Index] extends Route
    ? GenerateKeysForRoute<RouteArray[Index], Prefix>
    : never;
}[number];

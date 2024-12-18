import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Route } from '@/types/common';
import { GenerateKeyRoutes } from '@/types/mappedTypes';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generatePath<T extends ReadonlyArray<Route>>(
  paths: T,
  prefixPath = '',
  prefixName = '',
): { [K in GenerateKeyRoutes<T>]: string } {
  const result = {} as { [K in GenerateKeyRoutes<T>]: string };
  if (!Array.isArray(paths)) {
    return result;
  }

  paths.forEach((path) => {
    const pathName = prefixName ? `${prefixName}_${path.name}` : path.name;
    const newPath = `${prefixPath}/${path.path}`;
    result[pathName as GenerateKeyRoutes<T>] = newPath;

    if (path.subRoutes) {
      Object.assign(result, generatePath(path.subRoutes, newPath, pathName));
    }
  });

  return result;
}

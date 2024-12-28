import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Route } from '@/types/common';
import { GenerateKeyRoutes } from '@/types/mappedTypes';
import { ROOT_PATH } from '@/constants/path';
import isObject from 'lodash/isObject';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function addPrefix(prefix: string, value: string): string {
  return prefix ? `${prefix}_${value}` : value;
}

export function generateFullPath<T extends ReadonlyArray<Route>>(
  paths: T,
  prefixPath = '',
  prefixName = '',
): { [K in GenerateKeyRoutes<T>]: string } {
  const result = {} as { [K in GenerateKeyRoutes<T>]: string };
  if (!Array.isArray(paths)) {
    return result;
  }

  paths.forEach((path) => {
    const pathName = addPrefix(prefixName, path.name);
    const newPath = `${prefixPath}/${path.path}`;
    result[pathName as GenerateKeyRoutes<T>] = newPath;

    if (path.subRoutes) {
      Object.assign(result, generateFullPath(path.subRoutes, newPath, pathName));
    }
  });

  return result;
}

export function generateRoutePath<T extends ReadonlyArray<Route>>(
  paths: T,
  prefixName = '',
): { [K in GenerateKeyRoutes<T>]: string } {
  const result = {} as { [K in GenerateKeyRoutes<T>]: string };
  if (!Array.isArray(paths)) {
    return result;
  }

  paths.forEach((path) => {
    const pathName = addPrefix(prefixName, path.name);
    const newPath = `${path.path || ROOT_PATH}${path.suffixPath ?? ''}`;
    result[pathName as GenerateKeyRoutes<T>] = newPath;

    if (path.subRoutes) {
      Object.assign(result, generateRoutePath(path.subRoutes, pathName));
    }
  });

  return result;
}

export function convertKeysToString(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map(convertKeysToString);
  } else if (isObject(obj)) {
    return Object.entries(obj).reduce<Record<string, unknown>>((acc, [key, value]) => {
      acc[String(key)] = convertKeysToString(value);
      return acc;
    }, {});
  }
  return obj;
}

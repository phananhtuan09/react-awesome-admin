import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbLabel,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';
import { useCallback, useEffect, useMemo, useState, memo } from 'react';
import { NavLink, useLocation } from 'react-router';
import { ROUTE_CONFIG, ROOT_PATH } from '@/constants/path';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdownMenu';
import { ChevronDownIcon } from 'lucide-react';

interface BreadcrumbList {
  title: string;
  url: string;
  isDisabled?: boolean;
}

interface BreadcrumbRouterProps {
  isEllipsis?: boolean;
}

const BreadcrumbRouter = ({ isEllipsis = false }: BreadcrumbRouterProps) => {
  const location = useLocation();

  const breadcrumbNames = useMemo(() => {
    return {
      [ROUTE_CONFIG.ROOT]: 'Home',
      [ROUTE_CONFIG.LOGIN]: 'Login',
      [ROUTE_CONFIG.PROFILE]: 'Profile',
      [ROUTE_CONFIG.ADMIN]: 'Admin',
    };
  }, []);

  const BreadcrumbItemLink = memo(({ item }: { item: BreadcrumbList }) => {
    return (
      <>
        <BreadcrumbItem className="hidden md:block" key={item.title}>
          {item.isDisabled ? (
            <BreadcrumbLabel title={item.title} />
          ) : (
            <BreadcrumbLink asChild>
              <NavLink to={item.url}>
                <span>{item.title}</span>
              </NavLink>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
      </>
    );
  });

  const BreadcrumbItemEllipsisDropdown = memo(({ breadcrumbs }: { breadcrumbs: BreadcrumbList[] }) => {
    return (
      <BreadcrumbItem className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 outline-none">
            <BreadcrumbEllipsis />
            <ChevronDownIcon size={16} className="text-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {breadcrumbs.slice(1, breadcrumbs.length - 2).map((crumb) => (
              <DropdownMenuItem asChild key={crumb.title} className="capitalize cursor-pointer">
                <NavLink to={crumb.url}>
                  <span>{crumb.title}</span>
                </NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
    );
  });

  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbList[]>([]);

  const handleGetBreadcrumb = useCallback(() => {
    const pathNames = location.pathname.split('/').slice(1);
    const newBreadcrumbList = pathNames.reduce<BreadcrumbList[]>(
      (acc, cur, index) => {
        acc.push({
          title: breadcrumbNames[cur] || cur,
          url: '/' + pathNames.slice(0, index + 1).join('/'),
        });
        return acc;
      },
      [
        {
          title: breadcrumbNames[ROOT_PATH] ?? 'Home',
          url: ROOT_PATH,
        },
      ],
    );
    setBreadcrumbs(newBreadcrumbList);
  }, [location.pathname, breadcrumbNames]);

  useEffect(() => {
    handleGetBreadcrumb();
  }, [location.pathname, handleGetBreadcrumb]);

  if (!Array.isArray(breadcrumbs)) {
    return null;
  }

  return (
    <Breadcrumb className="overflow-hidden pb-4 capitalize">
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => {
          // Render last item as current page
          if (index === breadcrumbs.length - 1) {
            return (
              <BreadcrumbItem key={item.title}>
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          }

          // Always render first and last item -1 as link
          if (index === 0 || index === breadcrumbs.length - 2) {
            return <BreadcrumbItemLink item={item} key={item.title} />;
          }

          if (isEllipsis && breadcrumbs.length - 3 > 1) {
            if (index === 1) {
              // Render ellipsis dropdown if there are more than 3 items(because we always render first and last item -1, last item)
              return <BreadcrumbItemEllipsisDropdown breadcrumbs={breadcrumbs} />;
            }
            // This component only render one ellipsis dropdown so we skip the rest
            return null;
          }
          // Render the rest as link
          return <BreadcrumbItemLink item={item} />;
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbRouter;

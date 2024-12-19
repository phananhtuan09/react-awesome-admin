import { Home, Inbox } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuAction,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import logo from '@/assets/images/logo.png';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import isObject from 'lodash/isObject';
import { ROOT_PATH, PATH } from '@/constants/path';

import { useNavigate, NavLink } from 'react-router';
import { useCallback } from 'react';

interface SubItem {
  title: string;
  url: string;
}

interface MenuItem {
  title: string;
  url: string;
  icon?: React.ComponentType;
  isCollapsible?: boolean;
  subItems?: SubItem[];
}

interface MenuGroups {
  title: string;
  menu: MenuItem[];
}

interface SidebarGroupCompProps {
  group: MenuGroups;
}

interface SidebarMenuCompProps {
  menu: MenuItem[];
}

const menuGroups: MenuGroups[] = [
  {
    title: 'Application',
    menu: [
      {
        title: 'Dashboard',
        url: '',
        icon: Home,
        isCollapsible: true,
        subItems: [
          {
            title: 'Home',
            url: PATH.HOME,
          },
        ],
      },
    ],
  },
  {
    title: 'Settings',
    menu: [
      {
        title: 'Profile',
        url: PATH.PROFILE,
        icon: Inbox,
      },
    ],
  },
];

const SidebarHeaderComp = () => {
  const navigate = useNavigate();
  const HandleNavigateHome = useCallback(() => {
    navigate(ROOT_PATH);
  }, [navigate]);
  return (
    <SidebarHeader>
      <div className="flex flex-wrap items-center cursor-pointer" onClick={HandleNavigateHome}>
        <img src={logo} className="w-14 h-14 object-cover" />
        <span>Awesome Admin</span>
      </div>
    </SidebarHeader>
  );
};

const SidebarMenuButtonComp = ({ item, isCollapsible = false }: { item: MenuItem; isCollapsible?: boolean }) => {
  if (isCollapsible) {
    return (
      <CollapsibleTrigger asChild>
        <SidebarMenuButton asChild className="cursor-pointer">
          <span>
            {item.icon && <item.icon />}
            {item.title}
          </span>
        </SidebarMenuButton>
      </CollapsibleTrigger>
    );
  }
  return (
    <SidebarMenuButton asChild>
      <NavLink to={item.url}>
        {item.icon && <item.icon />}
        <span>{item.title}</span>
      </NavLink>
    </SidebarMenuButton>
  );
};

const SidebarSidebarMenuSubItemComp = ({ subItems }: { subItems?: SubItem[] }) => {
  if (!Array.isArray(subItems)) {
    return null;
  }
  return (
    <SidebarMenuSub>
      {subItems.map((subItem) => {
        return (
          <SidebarMenuSubItem key={subItem.title}>
            <SidebarMenuSubButton asChild>
              <NavLink to={subItem.url}>
                <span>{subItem.title}</span>
              </NavLink>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        );
      })}
    </SidebarMenuSub>
  );
};

const SidebarMenuComp = ({ menu }: SidebarMenuCompProps) => {
  if (!Array.isArray(menu)) {
    return null;
  }
  return (
    <SidebarMenu>
      {menu.map((item) => {
        if (item.isCollapsible) {
          return (
            <Collapsible defaultOpen className="group/collapsible" key={item.title}>
              <SidebarMenuItem key={item.title}>
                <SidebarMenuAction>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuAction>
                <SidebarMenuButtonComp item={item} isCollapsible={true}></SidebarMenuButtonComp>
                <CollapsibleContent>
                  <SidebarSidebarMenuSubItemComp subItems={item.subItems}></SidebarSidebarMenuSubItemComp>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        }
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButtonComp item={item}></SidebarMenuButtonComp>
            <SidebarSidebarMenuSubItemComp subItems={item.subItems}></SidebarSidebarMenuSubItemComp>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
};

const SidebarGroupComp = ({ group }: SidebarGroupCompProps) => {
  if (!isObject(group)) {
    return null;
  }
  const { title, menu } = group;
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenuComp menu={menu}></SidebarMenuComp>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const SidebarContentComp = () => {
  if (!Array.isArray(menuGroups)) {
    return null;
  }
  return (
    <SidebarContent>
      {menuGroups.map((group) => (
        <SidebarGroupComp group={group} key={group.title}></SidebarGroupComp>
      ))}
    </SidebarContent>
  );
};

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeaderComp />
      <SidebarContentComp />
    </Sidebar>
  );
};

export default AppSidebar;

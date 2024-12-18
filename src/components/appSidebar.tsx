import { Calendar, Home, Inbox, Search } from 'lucide-react';
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
} from '@/components/ui/sidebar';
import logo from '@/assets/images/logo.png';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import isObject from 'lodash/isObject';
import { ROOT_PATH, PATH } from '@/constants/path';

import { useNavigate } from 'react-router';

// Menu items.
// const items = [
//   {
//     title: 'Home',
//     url: '#',
//     icon: Home,
//   },
//   {
//     title: 'Inbox',
//     url: '#',
//     icon: Inbox,
//   },
//   {
//     title: 'Calendar',
//     url: '#',
//     icon: Calendar,
//   },
//   {
//     title: 'Search',
//     url: '#',
//     icon: Search,
//   },
//   {
//     title: 'Settings',
//     url: '#',
//     icon: Settings,
//   },
// ];

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
            url: ROOT_PATH,
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
        url: ROOT_PATH,
        icon: Inbox,
      },
    ],
  },
];

const SidebarHeaderComp = () => {
  const navigate = useNavigate();
  const HandleNavigateHome = () => {
    navigate(ROOT_PATH);
  };
  return (
    <SidebarHeader>
      <div className="flex flex-wrap items-center" onClick={HandleNavigateHome}>
        <img src={logo} className="w-14 h-14 object-cover" />
        <span>Awesome Admin</span>
      </div>
    </SidebarHeader>
  );
};

const SidebarMenuButtonComp = ({
  item,
  isCollapsible = false,
}: {
  item: MenuItem;
  isCollapsible?: boolean;
}) => {
  if (isCollapsible) {
    return (
      <CollapsibleTrigger asChild>
        <SidebarMenuButton asChild>
          <a href={item.url}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      </CollapsibleTrigger>
    );
  }
  return (
    <SidebarMenuButton asChild>
      <a href={item.url}>
        {item.icon && <item.icon />}
        <span>{item.title}</span>
      </a>
    </SidebarMenuButton>
  );
};

const SidebarSidebarMenuSubItemComp = ({
  subItems,
}: {
  subItems?: SubItem[];
}) => {
  if (!Array.isArray(subItems)) {
    return null;
  }
  return (
    <SidebarMenuSub>
      {subItems.map((subItem) => {
        return (
          <SidebarMenuSubItem key={subItem.title}>
            <a href={subItem.url}>
              <span>{subItem.title}</span>
            </a>
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
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem key={item.title}>
                <SidebarMenuAction>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuAction>
                <SidebarMenuButtonComp
                  item={item}
                  isCollapsible={true}
                ></SidebarMenuButtonComp>
                <CollapsibleContent>
                  <SidebarSidebarMenuSubItemComp
                    subItems={item.subItems}
                  ></SidebarSidebarMenuSubItemComp>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        }
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButtonComp item={item}></SidebarMenuButtonComp>
            <SidebarSidebarMenuSubItemComp
              subItems={item.subItems}
            ></SidebarSidebarMenuSubItemComp>
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
        <SidebarGroupComp group={group}></SidebarGroupComp>
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

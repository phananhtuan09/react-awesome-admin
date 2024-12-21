import { Sidebar } from '@/components/ui/sidebar';
import { PATH } from '@/constants/path';
import { Home, Inbox } from 'lucide-react';

import SidebarContentComp from './components/content';
import SidebarHeaderComp from './components/header';
import { MenuGroups } from './types';

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

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeaderComp />
      <SidebarContentComp menuGroups={menuGroups} />
    </Sidebar>
  );
};

export default AppSidebar;

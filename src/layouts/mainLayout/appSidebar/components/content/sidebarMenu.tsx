import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import {
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { ChevronDown } from 'lucide-react';
import { memo } from 'react';
import { NavLink } from 'react-router';
import { MenuItem, SubItem } from '../../types';
import SidebarMenuButtonComp from './sidebarMenuButton';

interface SidebarMenuCompProps {
  menu: MenuItem[];
}

interface SidebarSidebarMenuSubItemCompProps {
  subItems?: SubItem[];
}

const SidebarSidebarMenuSubItemComp = memo(({ subItems }: SidebarSidebarMenuSubItemCompProps) => {
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
});

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

export default memo(SidebarMenuComp);

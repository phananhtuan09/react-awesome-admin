import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from '@/components/ui/sidebar';
import isObject from 'lodash/isObject';
import { MenuGroups } from '../../types';
import SidebarMenuComp from './sidebarMenu';

interface SidebarGroupCompProps {
  group: MenuGroups;
}

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

export default SidebarGroupComp;

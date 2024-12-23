import { SidebarContent } from '@/components/ui/sidebar';
import { MenuGroups } from '../../types';
import SidebarGroupComp from './sidebarGroup';

interface SidebarContentCompProps {
  menuGroups: MenuGroups[];
}

const SidebarContentComp = ({ menuGroups }: SidebarContentCompProps) => {
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

export default SidebarContentComp;

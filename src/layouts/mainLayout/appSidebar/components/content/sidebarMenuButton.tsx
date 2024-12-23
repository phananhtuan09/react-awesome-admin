import { CollapsibleTrigger } from '@/components/ui/collapsible';
import { SidebarMenuButton } from '@/components/ui/sidebar';
import { NavLink } from 'react-router';
import { MenuItem } from '../../types';

interface SidebarMenuButtonCompProps {
  item: MenuItem;
  isCollapsible?: boolean;
}

const SidebarMenuButtonComp = ({ item, isCollapsible = false }: SidebarMenuButtonCompProps) => {
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

export default SidebarMenuButtonComp;

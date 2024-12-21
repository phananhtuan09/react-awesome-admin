export interface SubItem {
  title: string;
  url: string;
}

export interface MenuItem {
  title: string;
  url: string;
  icon?: React.ComponentType;
  isCollapsible?: boolean;
  subItems?: SubItem[];
}

export interface MenuGroups {
  title: string;
  menu: MenuItem[];
}

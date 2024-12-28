import HeaderHome from '@/components/ui/header';
import { SidebarHeader } from '@/components/ui/sidebar';

const SidebarHeaderComp = () => {
  return (
    <SidebarHeader>
      <HeaderHome
        classNameIcon="group-data-[collapsible=offcanvas]:hidden"
        classNameText="group-data-[state=collapsed]:hidden"
      ></HeaderHome>
    </SidebarHeader>
  );
};

export default SidebarHeaderComp;

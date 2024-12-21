import { SidebarHeader } from '@/components/ui/sidebar';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import { ROOT_PATH } from '@/constants/path';
import logo from '@/assets/images/logo.png';

const SidebarHeaderComp = () => {
  const navigate = useNavigate();

  const navigateHome = useCallback(() => {
    navigate(ROOT_PATH);
  }, [navigate]);

  return (
    <SidebarHeader>
      <div className="flex flex-wrap items-center cursor-pointer" onClick={navigateHome}>
        <img src={logo} className="w-12 h-12 object-cover group-data-[collapsible=offcanvas]:hidden" />
        <span className="ml-2 group-data-[state=collapsed]:hidden">Awesome Admin</span>
      </div>
    </SidebarHeader>
  );
};

export default SidebarHeaderComp;

import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import ModeToggle from '@/components/theme/modeToggle';
import AvatarIcon from './components/avatarIcon';
import NotificationIcon from './components/notificationIcon';
import LangueIcon from './components/langueIcon';
import HeaderHome from '@/components/ui/header';

const Header = () => {
  return (
    <header className="border-b-[1px] justify-between backdrop-blur border-border sticky top-0 z-50 flex h-16  items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 p-4 overflow-hidden">
      <HeaderHome className="flex md:hidden" classNameText="hidden" />
      <div className="items-center gap-2 max-w-[40%] hidden md:flex">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>
      <div className="flex items-center gap-4">
        <LangueIcon />
        <ModeToggle />
        <NotificationIcon />
        <AvatarIcon />
      </div>
    </header>
  );
};

export default Header;

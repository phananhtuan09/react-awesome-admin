import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import ModeToggle from '@/components/theme/modeToggle';
import AvatarIcon from './components/avatarIcon';
import BreadcrumbHeader from './components/breadcrumb';
import NotificationIcon from './components/notificationIcon';

const Header = () => {
  return (
    <header className="border-b-[1px] backdrop-blur border-border sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 p-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <BreadcrumbHeader />
      </div>

      <div className="flex items-center justify-center gap-4">
        <ModeToggle />
        <NotificationIcon />
        <AvatarIcon />
      </div>
    </header>
  );
};

export default Header;

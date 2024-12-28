import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/layouts/mainLayout/appSidebar';
import Header from './header';
import { Outlet } from 'react-router';
import BreadcrumbRouter from '../mainLayout/breadcrumb';

const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="px-8 py-4">
          <BreadcrumbRouter />
          <div className="flex flex-1 flex-col gap-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        </div>

        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;

import { Bell } from 'lucide-react';

const NotificationIcon = () => {
  return (
    <button type="button" className="relative inline-flex items-center text-sm font-medium text-center text-white">
      <Bell className="text-foreground" />
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-destructive border-2 border-white rounded-full -top-3 left-2 dark:border-gray-900">
        20
      </div>
    </button>
  );
};

export default NotificationIcon;

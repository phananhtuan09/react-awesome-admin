import { Moon, Sun } from 'lucide-react';

import { Theme, useTheme } from '@/components/theme/themeProvider';

function ModeToggle() {
  const { setTheme } = useTheme();

  const changeTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = event.currentTarget.getAttribute('data-theme-click-value');
    if (newTheme) {
      setTheme(newTheme as Theme);
    }
  };

  return (
    <>
      <button
        type="button"
        className="group-data-[theme=dark]:hidden block font-medium rounded-full hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-gray-200"
        data-theme-click-value="dark"
        onClick={changeTheme}
      >
        <span className="inline-flex shrink-0 justify-center items-center size-9">
          <Moon />
        </span>
      </button>
      <button
        type="button"
        className="group-data-[theme=light]:hidden block font-medium rounded-full hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-gray-200"
        data-theme-click-value="light"
        onClick={changeTheme}
      >
        <span className="inline-flex shrink-0 justify-center items-center size-9">
          <Sun />
        </span>
      </button>
    </>
  );
}

export default ModeToggle;

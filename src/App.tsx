import { ThemeProvider } from '@/components/theme/themeProvider';
import { ModeToggle } from '@/components/theme/modeToggle';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>Your App Content Goes Here</div>
        <ModeToggle />
      </ThemeProvider>
    </>
  );
}

export default App;

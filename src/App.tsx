import { ThemeProvider } from '@/components/theme/themeProvider';
import ThemeRoutes from './routes';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ThemeRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;

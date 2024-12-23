import { ThemeProvider } from '@/components/theme/themeProvider';
import ThemeRoutes from './routes';

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App';
import AffineCipherApp from './AffineCipherApp';
import { ThemeProvider } from '@material-tailwind/react';
import { NavbarSimple } from './NavbarSimple';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <div className="flex justify-center">
        <NavbarSimple />
        <AffineCipherApp />
      </div>
    </ThemeProvider>
  </StrictMode>,
)
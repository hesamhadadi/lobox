import React from 'react';

import './styles/themes/index.scss';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
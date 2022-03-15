import React from 'react';
import { Header } from './components/Header/Header';
import { MainRoutes } from './routes/MainRoutes';
const App = () => {
  return (
    <div>
      <Header />
      <MainRoutes />
    </div>
  );
};

export default App;


import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import './App.css';

import Header from './pages/shared/Header/Header';


function App() {
  return (
    <div>
      <div><Toaster/></div>
  <Header/>
  <Outlet/>
    </div>
  );
}

export default App;

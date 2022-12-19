import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar>
        <Outlet />
      </Navbar>
    </div>
  );
}

export default App;

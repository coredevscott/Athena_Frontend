import './App.css';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Market from './components/Market';
import Stake from './components/Stake';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/market' element={<Market />}></Route>
        <Route path='/stake' element={<Stake />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

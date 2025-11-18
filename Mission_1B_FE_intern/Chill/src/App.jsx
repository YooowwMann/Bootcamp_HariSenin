import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register';
import './App.css'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

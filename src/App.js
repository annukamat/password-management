import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import Password from './Component/Password';
import Login from './Component/Login';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/all-pass" element={<Password/>} />
      <Route path="/login" element={<Login/>} /> 
    </Routes>
  </BrowserRouter>;
}

export default App;

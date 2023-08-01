import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Knowmore from './pages/Knowmore';
import Nothing from './pages/Onumilla';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/Know-more' element={<Knowmore/>}></Route>
      <Route path='/Nothing' element={<Nothing/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}



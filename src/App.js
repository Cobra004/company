import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Knowmore from './pages/Knowmore';
import Nothing from './pages/Onumilla';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import AboutUs from './pages/AboutUs';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/Know-more' element={<Knowmore/>}></Route>
      <Route path='/Nothing' element={<Nothing/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/Products' element={<ProductPage/>}></Route>
      <Route path='/About-Us' element={<AboutUs/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}



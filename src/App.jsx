import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Basket from './Components/Basket/Basket';
import dataHeader from './data/dataHeader.js'
import './App.module.css';

function App() {
    return (
        <BrowserRouter basename={'flower-shop/'}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout dataHeader={dataHeader}/>}>
                        <Route index element={<Home />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="about" element={<About />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="basket" element={<Basket />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

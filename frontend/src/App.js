import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/login'
import Register from './components/auth/register'
import Client from './components/client/client'
import Home from './components/client/components/home'
import Detail from './components/client/components/detail'
import Cart from './components/client/cart'
import PurchaseHistory from './components/client/purchase-history';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='store' element={<Client />}>
        <Route path="" element={<Home />} />
        <Route path="detail/:id/:category" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="purchase-history" element={<PurchaseHistory />} />
    </Routes>
  );
}

export default App;

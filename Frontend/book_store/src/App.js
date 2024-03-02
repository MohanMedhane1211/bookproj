import './App.css';
import { Routes, Route } from 'react-router-dom';
// screens

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//components
import Navbar from './components/Navbar';
import Login from './screens/Login';
import Signup from './screens/Signup';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route index  path="/home" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
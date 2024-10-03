import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import './App.css';
import CartDetails from './components/CartDetails';
import Headers from './components/Headers';
import Home from './components/Home';

function App() {
  return (
    <>
     <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
     </Routes>
     <Toaster />
    </>
  );
}

export default App;;

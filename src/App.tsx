import { Routes, Route } from "react-router-dom";
import CartProvider from './context/provider'
// Layout
import MainLayout from './layouts/main'
// pages
import Home from './pages/home';
// import FrozenPizza from "./pages/frozenPizza";
import IceCream from "./pages/iceCream";

function App() {

  return (
    <CartProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ice-cream" element={<IceCream />} />
          {/* <Route path="frozen-pizza" element={<FrozenPizza />} /> */}
        </Routes>
      </MainLayout>
    </CartProvider>
  );
}

export default App;
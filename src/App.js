import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Products from "./pages/Products";
import CartProvider from "./Context/CartProvider";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <main className="font-Iransans">
      <ToastContainer />
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="category/:id" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </Router>
    </main>
  );
}

export default App;

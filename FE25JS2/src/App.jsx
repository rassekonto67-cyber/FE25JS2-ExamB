import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Clothes from "./pages/clothes";
import Product from "./pages/Product";
import MainLayout from "./layout/MainLayout";
// import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="clothes/:id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;

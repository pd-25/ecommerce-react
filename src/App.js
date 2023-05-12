import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/category" element={ <Category />} />
            <Route path="/single-product" element={ <SingleProduct />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;

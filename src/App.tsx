import './App.css'
import Home from "./components/pages/home/home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/pages/notFound/notFound";
import Cart from "./components/pages/cart/cart";
import MainLayout from "./layouts/mainLayout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="React-Pizza" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="React-Pizza/cart" element={<Cart/>}/>
            </Route>
        </Routes>
    )
}

export default App

import './App.css'
import Home from "./components/pages/home/home";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import {lazy, Suspense} from "react";

const NotFound = lazy(() => import('./components/pages/notFound/notFound'));
const Cart = lazy(() => import('./components/pages/cart/cart'));

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="*" element={<Suspense><NotFound/></Suspense>}/>
                <Route path="cart" element={<Suspense><Cart/></Suspense>}/>
            </Route>
        </Routes>
    )
}

export default App

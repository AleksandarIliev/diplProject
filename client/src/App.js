
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { productServiceFactory } from "./services/productService";

import { AuthProvider } from "./contexts/AuthContext";

import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Details } from "./components/Details/Details";
import { Contact } from "./components/Contact/Contact";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { Footer } from "./components/Footer/Footer";
import { Modify } from "./components/Modify/Modify";

function App() {
    const navigate = useNavigate();
    const [products, setProduct] = useState([]);
    const productService = productServiceFactory();

    useEffect(() => {
        productService.getAll()
            .then(result => {
                setProduct(result);
            })
    }, []);

    const onAddProductSubmit = async (data) => {
        const newProduct = await productService.create(data);
        setProduct(state => [...state, newProduct])
        navigate('/catalog');
    };

    const onProductModifySubmit = async (values) => {
        const result = await productService.edit(values._id, values);
        setProduct(state => state.map(x => x.id === values._id ? result : x))
        navigate(`/catalog/${values._id}`);
    }

    return (
        <AuthProvider>
            <div className="App">
                <Header />
                <main className="Main">
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog products={products} />} />
                        <Route path='/addProduct' element={<AddProduct onAddProductSubmit={onAddProductSubmit} />} />
                        <Route path='/catalog/:productId' element={<Details />} />
                        <Route path='/catalog/:productId/modify' element={<Modify onProductModifySubmit={onProductModifySubmit}/>} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;

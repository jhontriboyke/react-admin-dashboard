import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import NotFound404 from './pages/notFound404/NotFound404';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <div className="container">
                <Sidebar pathname={location.pathname} />
                <main className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/home" replace />}
                        />
                        <Route path="/home" element={<Home />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/user/:userId" element={<User />} />
                        <Route path="/new-user" element={<NewUser />} />
                        <Route path="/products" element={<ProductList />} />
                        <Route
                            path="/product/:productId"
                            element={<Product />}
                        />
                        <Route path="/new-product" element={<NewProduct />} />
                        <Route path="*" element={<NotFound404 />} />
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;

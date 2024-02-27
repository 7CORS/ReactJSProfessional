import { useEffect, useState } from 'react';
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from "react-router-dom";

// Admin Routes
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/Home";
import ProductListing from "./routes/Admin/ProductListing";
import ProductForm from './routes/Admin/ProductForm';

// Client Routes
import Client from "./routes/Client";
import Login from "./routes/Client/Login";
import ProductCatalog from "./routes/Client/ProductCatalog";
import ProductDetails from "./routes/Client/ProductDetails";
import Cart from "./routes/Client/Cart";
import ConfirmationCart from "./routes/Client/ConfirmationCart";

// Models
import { AccessTokenPayloadDTO } from "./models/auth";

// Services
import * as authService from './services/auth-service';
import * as cartService from './services/cart-service';

// History
import { history } from './utils/history';
import { PrivateRoute } from "./components/PrivateRoute";
import { ContextCartCount } from "./utils/ContextCart";
import { ContextToken } from "./utils/ContextToken";

export default function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);
  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {
    // carrega o que estiver no carrinho no LocalIstorage
    setContextCartCount(cartService.getCart().items.length);

    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);

  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
      <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
        <HistoryRouter history={history}>
          <Routes>

            <Route path="/" element={<Client />} >
              <Route index element={<ProductCatalog />} />
              <Route path="product-catalog" element={<ProductCatalog />} />
              <Route path="product-details/:productId" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="confirmation/:orderId" element={<PrivateRoute><ConfirmationCart /></PrivateRoute>} />
            </Route>

            <Route path="/admin/" element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>}>
              <Route index element={<Navigate to="home" />} />
              <Route path="home" element={<AdminHome />} />
              <Route path="products" element={<ProductListing />} />
              <Route path="products/:productId" element={<ProductForm />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}
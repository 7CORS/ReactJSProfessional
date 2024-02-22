import { /*BrowserRouter*/ Navigate, Route, Routes } from "react-router-dom";

import Client from "./routes/Client";
import Login from "./routes/Client/Login";
import ProductCatalog from "./routes/Client/ProductCatalog";
import ProductDetails from "./routes/Client/ProductDetails";
import Cart from "./routes/Client/Cart";
import * as authService from './services/auth-service';
import * as cartService from './services/cart-service';

import { useEffect, useState } from 'react';
import { ContextCartCount } from "./utils/ContextCart";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/Home";

// history
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import { PrivateRoute } from "./components/PrivateRoute";
import { AccessTokenPayloadDTO } from "./models/auth";
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
            </Route>

            <Route path="/admin/" element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>}>
              <Route index element={<AdminHome />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}
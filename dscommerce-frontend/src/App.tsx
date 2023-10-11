import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Client from "./routes/Client";
import ProductCatalog from "./routes/Client/ProductCatalog";
import ProductDetails from "./routes/Client/ProductDetails";
import Cart from "./routes/Client/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Client />} >
          <Route index element={<ProductCatalog />} />
          <Route path="product-catalog" element={<ProductCatalog />} />
          <Route path="product-details/:productId" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
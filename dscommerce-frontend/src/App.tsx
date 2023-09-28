import { BrowserRouter, Route, Routes } from "react-router-dom";

import Client from "./routes/Client";
import ProductCatalog from "./routes/Client/ProductCatalog";
import ProductDetails from "./routes/Client/ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Client />} >
          <Route index element={<ProductCatalog />} />
          <Route path="product-catalog" element={<ProductCatalog />} />
          <Route path="product-details" element={<ProductDetails />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import NotFound from './routes/NotFound';
import Invoice from './routes/Invoices/Invoice';
import InvoicesIndex from './routes/Invoices/InvoicesIndex';
import Welcome from './routes/Home/Welcome';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} >
        <Route index element={<Welcome />} /> {/* welcome index (subroute) */}

        <Route path="expenses" element={<Expenses />} />

        <Route path="invoices" element={<Invoices />} >
          <Route index element={<InvoicesIndex />} /> {/* invoices index (subroute) */}
          <Route path=":invoiceId" element={<Invoice />} /> {/* specific invoice (subroute) */}
        </Route>

        {/* The "No Match" route should be the last */}
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  </BrowserRouter>
)
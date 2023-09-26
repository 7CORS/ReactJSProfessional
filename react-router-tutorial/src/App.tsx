import { Link, Outlet } from 'react-router-dom';
import './App.css'

export default function App() {
  return (
    <>
      <nav className="router-links">
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </>
  );
}
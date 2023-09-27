import './styles.css';

import { getInvoices } from '../../data/data';
import { NavLink, Outlet } from 'react-router-dom';

export default function Invoices() {
    const invoices = getInvoices();

    return (
        <div className="container">
            <nav className="nav">
                {invoices.map((invoice) => (
                    <NavLink
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                        className={({ isActive }) => isActive ? "dblock nav-link active-link" : "dblock nav-link"}
                    >
                        {invoice.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}

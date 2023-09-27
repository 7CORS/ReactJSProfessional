import './styles.css';

import { getInvoices } from '../../data/data';
import { Link, Outlet } from 'react-router-dom';

export default function Invoices() {
    const invoices = getInvoices();

    return (
        <div className="container">
            <nav className="nav">
                {invoices.map((invoice) => (
                    <Link
                        className="link"
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}
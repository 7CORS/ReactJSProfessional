import './styles.css';

import { getInvoices } from '../../data/data';
import { Outlet, useSearchParams } from 'react-router-dom';
import QueryLink from '../../components/QueryLink';

export default function Invoices() {
    const invoices = getInvoices();
    const [searchParams, setSearchParams] = useSearchParams();

    /**
     * handleInputChange - Event handler for the input change event.
     * Updates the search parameters based on the input value.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
     */
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        if (name) {
            setSearchParams({ name });
        } else {
            setSearchParams({});
        }
    };

    /**
     * filterInvoices - Filters the list of invoices based on the search parameters.
     * If a name is provided in the search parameters, it filters the invoices that start with that name.
     *
     * @returns {Array} - The filtered list of invoices.
     */
    const filterInvoices = () => {
        const name = searchParams.get("name");
        if (!name) {
            return invoices;
        }
        return invoices.filter(invoice =>
            invoice.name.toLowerCase().startsWith(name.toLowerCase())
        );
    };

    /**
     * renderInvoiceLinks - Renders the list of invoice links.
     * Uses the filtered list of invoices and maps them to NavLink components.
     *
     * @returns {Array} - An array of NavLink components for each invoice.
     */
    const renderInvoiceLinks = () => {
        return filterInvoices().map((invoice) => (
            <QueryLink
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
                className={({ isActive }) => isActive ? "dblock nav-link active-link" : "dblock nav-link"}
            >
                {invoice.name}
            </QueryLink>
        ));
    };

    return (
        <div className="container">
            <nav className="nav">
                <input
                    value={searchParams.get("name") || ""}
                    onChange={handleInputChange}
                />
                {renderInvoiceLinks()}
            </nav>
            <Outlet />
        </div>
    );
}
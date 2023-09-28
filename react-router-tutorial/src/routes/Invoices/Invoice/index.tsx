import './styles.css';

import { useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../../../data/data";

export default function Invoice() {
    const params = useParams();
    const navigate = useNavigate();

    if (!params.invoiceId) {
        return <div>Invoice ID not found!</div>;
    }

    const invoice = getInvoice(Number(params.invoiceId));

    if (!invoice) {
        return <div>Invoice not found!</div>;
    }

    return (
        <main className="invoice-main">
            <h2 className="invoice-header">Total Due: {invoice.amount}</h2>
            <p className="invoice-details">
                {invoice.name}: {invoice.number}
            </p>
            <p className="invoice-details">Due Date: {invoice.due}</p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        navigate("/invoices" + location.search);
                    }}
                >
                    Delete
                </button>
            </p>
        </main>
    );
}
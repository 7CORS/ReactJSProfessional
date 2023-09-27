import './styles.css';

import { useParams } from "react-router-dom";
import { getInvoice } from "../../../data/data";

export default function Invoice() {
    const params = useParams();

    if (!params.invoiceId) {
        return <div>Invoice ID not found!</div>;
    }

    const invoice = getInvoice(Number(params.invoiceId));

    return (
        <main className="invoice-main">
            <h2 className="invoice-header">Total Due: {invoice?.amount}</h2>
            <p className="invoice-details">
                {invoice?.name}: {invoice?.number}
            </p>
            <p className="invoice-details">Due Date: {invoice?.due}</p>
        </main>
    );
}
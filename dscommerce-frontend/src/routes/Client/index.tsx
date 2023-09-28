import { Outlet } from "react-router-dom";
import HeaderClient from "../../components/HeaderClient";

export default function Client() {
    return (
        <>
            <HeaderClient />
            <Outlet />
        </>
    );
}
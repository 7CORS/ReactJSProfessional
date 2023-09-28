/**
 * QueryLink Component
 * 
 * This component is an extension of the `NavLink` component from `react-router-dom`.
 * It's designed to preserve the query parameters from the current location when navigating
 * to a new route.
 * 
 * Props:
 * - All the props accepted by `NavLink` from `react-router-dom`.
 * - `to`: The pathname to link to. This is a required prop.
 * 
 * Usage:
 * 
 * Suppose you're on a page with the URL `/invoices?page=2` and you want to navigate to 
 * `/expenses` but keep the query parameter `page=2`. You can use `QueryLink` like this:
 * 
 * ```jsx
 * <QueryLink to="/expenses">Go to Expenses</QueryLink>
 * ```
 * 
 * When clicked, this will navigate to `/expenses?page=2`.
 * 
 * @param {string} to - The pathname to link to.
 * @param {...NavLinkProps} props - Any other prop accepted by `NavLink`.
 * 
 * @returns {ReactElement} A `NavLink` element with the `to` prop appended with the current location's query parameters.
 */
import { NavLink, useLocation, NavLinkProps } from "react-router-dom";

interface QueryLinkProps extends NavLinkProps {
    to: string;
}

export default function QueryLink({ to, ...props }: QueryLinkProps) {
    const location = useLocation();

    return <NavLink to={to + location.search} {...props} />;
}
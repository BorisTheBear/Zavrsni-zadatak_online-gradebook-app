import { Redirect, Route } from "react-router-dom";

export default function PublicRoute({children, ...props}) {
    const isAuthenticated = !!localStorage.getItem("token");

    return (
        <Route {...props}>
            {isAuthenticated ? <Redirect to="/" /> : children}
        </Route>
    );
}
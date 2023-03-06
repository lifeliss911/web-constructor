import {
    LOGIN_ROUTE,
    MAIN_ROUTE,
} from "./utils/consts";
import Main from "./pages/main/index"
import Login from "./pages/login/index"

export const authRoutes = [
    // {
    //     path: ORDERS_ROUTE,
    //     Component: Orders
    // },
];

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Login/>
    },
];
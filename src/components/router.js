import ClientLayout from "../layouts/ClientLayout";
import Home from "./client/Home";
import MakeupProducts from "./client/MakeupProducts";
import SkincareProducts from "./client/SkincareProducts";
import Login from "./Login";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";
import Register from "./Register";
import ProductDetails from "./client/ProductDetails";
import Cart from "./client/Cart";
import UpdatePassword from "./client/UpdatePassword";
import UserOrders from "./client/UserOrders";
import OrderItems from "./client/OrderItems";
import SearchResults from "./client/SearchResults";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";

const routes = [
    { path: "/", component: Home, layout: ClientLayout },
    { path: "/search_results", component: SearchResults, layout: ClientLayout },
    { path: "/register", component: Register, layout: ClientLayout },
    { path: "/login", component: Login, layout: ClientLayout },

    {
        path: "/profile",
        component: () => (
            <PrivateRoute>
                <Profile />
            </PrivateRoute>
        ),
        layout: ClientLayout,
    },
    {
        path: "/update_profile",
        component: () => (
            <PrivateRoute>
                <UpdateProfile />
            </PrivateRoute>
        ),
        layout: ClientLayout,
    },
    {
        path: "/update_password",
        component: () => (
            <PrivateRoute>
                <UpdatePassword />
            </PrivateRoute>
        ),
        layout: ClientLayout,
    },
    {
        path: "/user/orders",
        component: () => (
            <PrivateRoute>
                <UserOrders />
            </PrivateRoute>
        ),
        layout: ClientLayout,
    },
    {
        path: "/user/order_items/:order_id",
        component: () => (
            <PrivateRoute>
                <OrderItems />
            </PrivateRoute>
        ),
        layout: ClientLayout,
    },
    { path: "/skincare", component: SkincareProducts, layout: ClientLayout },
    { path: "/makeup", component: MakeupProducts, layout: ClientLayout },
    { path: "/products/:id", component: ProductDetails, layout: ClientLayout },
    { path: "/cart", component: Cart, layout: ClientLayout },
    { path: "*", component: NotFound, layout: ClientLayout },
];

export { routes };

import AdminLayout from "../layouts/AdminLayout";
import ClientLayout from "../layouts/ClientLayout";
import Categories from "./admin/Categories";
import Orders from "./admin/Orders";
import Products from "./admin/Products";
import Users from "./admin/Users";
import Home from "./client/Home";
import MakeupProducts from "./client/MakeupProducts";
import SkincareProducts from "./client/SkincareProducts";
import Login from "./Login";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";
import Register from "./Register";
import UnauthorizedAccess from "./UnauthorizedAccess";
import ProductForm from "./admin/ProductForm";
import ProductDetails from "./client/ProductDetails";
import Cart from "./client/Cart";
import UpdatePassword from "./client/UpdatePassword";
import UserOrders from "./client/UserOrders";
import OrderItems from "./client/OrderItems";
import SearchResults from "./client/SearchResults";

const routes = [
    { path: "/", component: Home, layout: ClientLayout },
    { path: "/search_results", component: SearchResults, layout: ClientLayout },
    { path: "/register", component: Register, layout: ClientLayout },
    { path: "/login", component: Login, layout: ClientLayout },
    { path: "/profile", component: Profile, layout: ClientLayout },
    { path: "/update_profile", component: UpdateProfile, layout: ClientLayout },
    {
        path: "/update_password",
        component: UpdatePassword,
        layout: ClientLayout,
    },
    { path: "/skincare", component: SkincareProducts, layout: ClientLayout },
    { path: "/makeup", component: MakeupProducts, layout: ClientLayout },
    { path: "/user/orders", component: UserOrders, layout: ClientLayout },
    {
        path: "/user/order_items/:order_id",
        component: OrderItems,
        layout: ClientLayout,
    },
    { path: "/products/:id", component: ProductDetails, layout: ClientLayout },
    { path: "/cart", component: Cart, layout: ClientLayout },
    { path: "/products", component: Products, layout: AdminLayout },
    { path: "/edit_product/:id", component: ProductForm, layout: AdminLayout },
    { path: "/orders", component: Orders, layout: AdminLayout },
    { path: "/categories", component: Categories, layout: AdminLayout },
    { path: "/users", component: Users, layout: AdminLayout },
    {
        path: "/unauthorized",
        component: UnauthorizedAccess,
        layout: ClientLayout,
    },
];

export { routes };

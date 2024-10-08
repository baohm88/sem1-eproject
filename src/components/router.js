import AdminLayout from "../layouts/AdminLayout";
import ClientLayout from "../layouts/ClientLayout";
import Categories from "./admin/Categories";
import Orders from "./admin/Orders";
import Products from "./admin/Products";
import Users from "./admin/Users";
import Home from "./client/Home";
import MakeupProducts from "./client/MakeupProducts";
import NewProducts from "./client/NewProducts";
import SkincareProducts from "./client/SkincareProducts";
import Login from "./Login";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";
import Register from "./Register";
import UnauthorizedAccess from "./UnauthorizedAccess";

const routes = [
    { path: "/", component: Home, layout: ClientLayout },
    { path: "/new_product", component: NewProducts, layout: ClientLayout },
    { path: "/skincare", component: SkincareProducts, layout: ClientLayout },
    { path: "/makeup", component: MakeupProducts, layout: ClientLayout },
    { path: "/register", component: Register, layout: ClientLayout },
    { path: "/login", component: Login, layout: ClientLayout },
    { path: "/profile", component: Profile, layout: ClientLayout },
    { path: "/update_profile", component: UpdateProfile, layout: ClientLayout },
    { path: "/products", component: Products, layout: AdminLayout },
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

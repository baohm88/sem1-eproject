import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./components/router";
import { createContext, useState } from "react";

export const UserContext = createContext({
    isAdmin: false,
    isLoggedin: false,
    setAdmin: () => {},
    setLoggedin: () => {},
    setLoggedout: () => {},
});

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedin, setLoggedin] = useState(false);

    function updateAdminStatus() {
        setIsAdmin((state) => !state);
    }

    function handleLogin() {
        setLoggedin((state) => !state);
    }

    function handleLogout() {
        setIsAdmin(false);
        setLoggedin(false);
    }

    const ctxValue = {
        isAdmin: isAdmin,
        isLoggedin: isLoggedin,
        setAdmin: updateAdminStatus,
        setLoggedin: handleLogin,
        setLoggedout: handleLogout,
    };

    return (
        <>
            <UserContext.Provider value={ctxValue}>
                <Routes>
                    {routes.map((item, index) => {
                        const Page = item.component;
                        const Layout = item.layout;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </UserContext.Provider>
        </>
    );
}

export default App;

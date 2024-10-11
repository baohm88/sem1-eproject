// import "./App.css";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import { routes } from "./components/router";
// import { createContext, useEffect, useState } from "react";

// export const UserContext = createContext({
//     user: null,
//     setUser: () => {},
//     handleLogOut: () => {},
// });

// function App() {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(() => {
//         const savedUser = localStorage.getItem("user");
//         return savedUser ? savedUser : null;
//     });

//     useEffect(() => {
//         if (user) {
//             localStorage.setItem("user", user);
//         } else {
//             localStorage.removeItem("user");
//         }
//     }, [user]);

//     function handleLogOut() {
//         setUser(null);
//         navigate("/");
//     }

//     const ctxValue = {
//         user: user,
//         setUser: setUser,
//         handleLogOut: handleLogOut,
//     };

//     return (
//         <>
//             <UserContext.Provider value={ctxValue}>
//                 <Routes>
//                     {routes.map((item, index) => {
//                         const Page = item.component;
//                         const Layout = item.layout;
//                         return (
//                             <Route
//                                 key={index}
//                                 path={item.path}
//                                 element={
//                                     <Layout>
//                                         <Page />
//                                     </Layout>
//                                 }
//                             />
//                         );
//                     })}
//                 </Routes>
//             </UserContext.Provider>
//         </>
//     );
// }

// export default App;

import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "./components/router";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => {},
    handleLogOut: () => {},
});

function App() {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null; // Parse the saved user
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user)); // Store as string
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    function handleLogOut() {
        setUser(null);
        navigate("/");
    }

    const ctxValue = {
        user: user,
        setUser: setUser,
        handleLogOut: handleLogOut,
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

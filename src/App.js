import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./components/router";
import { UserProvider } from "./context/UserProvider"; // Import UserProvider

function App() {
    return (
        <UserProvider>
            <Routes>
                {routes.map(({ path, component: Component, layout: Layout }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Layout>
                                <Component />
                            </Layout>
                        }
                    />
                ))}
            </Routes>
        </UserProvider>
    );
}

export default App;

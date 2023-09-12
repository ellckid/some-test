import { publicRoutes } from "../router/"
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {

    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={<route.component />}
                    path={route.path}
                    key={route.path}
                />
            )}
        </Routes>
    );
};

export default AppRouter;

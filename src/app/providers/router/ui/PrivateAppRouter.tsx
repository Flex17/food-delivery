import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { privateRouteConfig } from "shared/config/router/privateRouteConfig.tsx";
import { PageLoader } from "widgets/page-loader";

export const PrivateAppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(privateRouteConfig).map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    </Suspense>
);

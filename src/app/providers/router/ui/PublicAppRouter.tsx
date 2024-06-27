import { Route, Routes } from "react-router-dom";
import { publicRouteConfig } from "shared/config/router/publicRoterConfig.tsx";
import { Suspense } from "react";
import { PageLoader } from "widgets/page-loader";

export const PublicAppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(publicRouteConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};

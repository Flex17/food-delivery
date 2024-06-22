import React from "react";
import ReactDOM from "react-dom/client";
import "app/styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "app/router/router.tsx";
import { Provider } from "react-redux";
import { store } from "app/redux/store.ts";
import "./i18n";
import { injectStyle } from "react-toastify/inject-style";

injectStyle();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

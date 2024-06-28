import React from "react";
import ReactDOM from "react-dom/client";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/redux/store.ts";
import "./i18n";
import { injectStyle } from "react-toastify/inject-style";
import App from "app/app.tsx";
import { ErrorBoundary } from "app/providers/error-boundary";

injectStyle();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);

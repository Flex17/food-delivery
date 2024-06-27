import css from "./app.module.scss";
import { ToastContainer } from "react-toastify";
import { RequireAuth } from "app/layouts/require-auth/require-auth.tsx";

const App = () => {
    return (
        <div className={css.app}>
            <RequireAuth />
            <ToastContainer />
        </div>
    );
};

export default App;

import { ToastContainer } from "react-toastify";
import { RequireAuth } from "app/layouts/require-auth/require-auth.tsx";
import css from "./app.module.scss";

const App = () => (
    <div className={css.app}>
        <RequireAuth />
        <ToastContainer />
    </div>
);

export default App;

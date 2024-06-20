import css from "./app.module.scss";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <div className={css.app}>
            <Outlet />
            <ToastContainer />
        </div>
    );
};

export default App;

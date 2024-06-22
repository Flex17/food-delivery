import { NavLink } from "react-router-dom";
import logotip from "shared/assets/pngwing.com.png";
import css from "./logo.module.scss";

export const Logo = () => {
    return (
        <NavLink to="/">
            <img className={css.logo} src={logotip} alt="logo" />
        </NavLink>
    );
};

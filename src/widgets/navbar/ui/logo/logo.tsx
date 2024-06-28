import { NavLink } from "react-router-dom";
import logotip from "shared/assets/pngwing.com.png";
import css from "./logo.module.scss";

export const Logo = () => (
    <NavLink to="/">
        <img className={css.logo} src={logotip} alt="logo" />
    </NavLink>
);

import React from "react";
import { NavLink } from "react-router-dom";
import css from "./NavItem.module.scss";

interface NavItemProps {
    to: string;
    children: React.ReactNode;
}

export const NavItem = ({ to, children }: NavItemProps) => (
    <li>
        <NavLink className={({ isActive }) => (isActive ? css.nav_active : css.nav_item)} to={to}>
            {children}
        </NavLink>
    </li>
);

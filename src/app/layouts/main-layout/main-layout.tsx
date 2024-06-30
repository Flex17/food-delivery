import React from "react";
import { Navbar } from "widgets/navbar";
import { LanguageSwitcher } from "widgets/language-switcher";
import { LogoutButton } from "features/logout";
import css from "./main-layout.module.scss";

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Navbar />
        <main className="wrapper">{children}</main>
        <div className={css.controls_wrapper}>
            <LogoutButton />
            <LanguageSwitcher short />
        </div>
    </>
);

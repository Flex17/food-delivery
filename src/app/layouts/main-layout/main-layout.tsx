import React from "react";
import { Navbar } from "widgets/navbar";
import { SelectLanguage } from "features/select-language";
import { LogoutButton } from "features/logout";
import css from "./main-layout.module.scss";

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Navbar />
        <main className="wrapper">
            <div className={css.controls_wrapper}>
                <SelectLanguage />
                <LogoutButton />
            </div>
            {children}
        </main>
    </>
);

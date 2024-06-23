import React from "react";
import { Navbar } from "widgets/navbar";
import { Logo, NavItem } from "shared/ui";
import { useTranslation } from "react-i18next";
import { SelectLanguage } from "features/select-language";
import { LogoutButton } from "features/logout";
import css from "./main-layout.module.scss";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { t } = useTranslation();

    return (
        <>
            <Navbar logo={<Logo />}>
                <NavItem to="/">{t("navbar.menu")}</NavItem>
                <NavItem to="/orders">{t("navbar.orders")}</NavItem>
            </Navbar>
            <main className="wrapper">
                <div className={css.controls_wrapper}>
                    <SelectLanguage />
                    <LogoutButton />
                </div>
                {children}
            </main>
        </>
    );
};

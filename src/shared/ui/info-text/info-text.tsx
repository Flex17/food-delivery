import React from "react";
import css from "./info-text.module.scss";

export const InfoText = ({ children }: { children: React.ReactNode }) => {
    return <h3 className={css.wrapper}>{children}</h3>;
};

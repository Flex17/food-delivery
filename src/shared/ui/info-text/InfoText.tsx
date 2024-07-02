import React from "react";
import { classNames } from "shared/libs";
import css from "./InfoText.module.scss";

interface InfoTextProps {
	className?: string,
    children: React.ReactNode,
}

export const InfoText = ({ className, children }: InfoTextProps) => (
    <h3 className={classNames(css.wrapper, {}, [className])}>
        {children}
    </h3>
);

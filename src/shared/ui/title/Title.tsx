import React from "react";
import { classNames } from "shared/libs";
import css from "./Title.module.scss";

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

export const Title = ({ className, children }: TitleProps) => (
    <h1 className={classNames(css.title, {}, [className])}>
        {children}
    </h1>
);

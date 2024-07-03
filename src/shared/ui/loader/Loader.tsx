import { classNames } from "shared/libs";
import css from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <span className={classNames(css.loader, {}, [className])} />
);

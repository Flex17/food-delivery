import { classNames } from "shared/libs";
import { Loader } from "shared/ui";
import css from "./PageLoader.module.scss";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(css.wrapper, {}, [className])}>
        <Loader />
    </div>
);

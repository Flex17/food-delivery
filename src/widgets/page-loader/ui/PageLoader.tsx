import { classNames } from "shared/libs";
import css from "./PageLoader.module.scss";
import { Loader } from "shared/ui";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(css.wrapper, {}, [className])}>
            <Loader />
        </div>
    );
};

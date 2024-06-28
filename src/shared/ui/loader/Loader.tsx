import { classNames } from "shared/libs";
import { TailSpin } from "react-loader-spinner";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames("", {}, [className])}>
        <TailSpin visible height={80} width={80} color="#3F9E37" />
    </div>
);

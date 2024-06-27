import { classNames } from "shared/libs";
import { TailSpin } from "react-loader-spinner";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames("", {}, [className])}>
            <TailSpin visible={true} height={80} width={80} color="#3F9E37" />
        </div>
    );
};

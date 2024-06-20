import { TailSpin } from "react-loader-spinner";
import css from "./spinner.module.scss";

export const Spinner = () => {
    return (
        <div className={css.wrapper}>
            <TailSpin visible={true} height={80} width={80} color="#3F9E37" />
        </div>
    );
};

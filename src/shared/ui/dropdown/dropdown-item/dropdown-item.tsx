import { ReactComponent as SelectedIcon } from "../icons/selected.svg";
import css from "./dropdown-item.module.scss";

interface DropdownItemProps {
    text: string;
    isActive: boolean;
    select: (text: string) => void;
}

export const DropdownItem = ({ isActive, text, select }: DropdownItemProps) => {
    const onSelect = () => select(text);

    return (
        <div className={css.wrapper} onClick={onSelect}>
            {text}
            {isActive && (
                <div className={css.icon}>
                    <SelectedIcon />
                </div>
            )}
        </div>
    );
};

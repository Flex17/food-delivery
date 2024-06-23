import { ReactComponent as SelectedIcon } from "../icons/selected.svg";
import css from "./dropdown-item.module.scss";
import { IDropdownItem } from "shared/ui/dropdown/dropdown.tsx";

interface DropdownItemProps {
    item: IDropdownItem;
    isActive: boolean;
    select: (id: number) => void;
}

export const DropdownItem = ({ isActive, item, select }: DropdownItemProps) => {
    const { id, value } = item;

    const onSelect = () => select(id);

    return (
        <div className={css.wrapper} onClick={onSelect}>
            {value}
            {isActive && (
                <div className={css.icon}>
                    <SelectedIcon />
                </div>
            )}
        </div>
    );
};

import { IDropdownItem } from "shared/ui/dropdown/Dropdown.tsx";
import { classNames } from "shared/libs";
import { ReactComponent as SelectedIcon } from "../icons/selected.svg";
import css from "./DropdownItem.module.scss";

interface DropdownItemProps {
	className?: string,
    item: IDropdownItem;
    isActive: boolean;
    select: (id: number) => void;
}

export const DropdownItem = ({ className, isActive, item, select }: DropdownItemProps) => {
    const { id, value } = item;

    const onSelect = () => select(id);

    return (
        <div className={classNames(css.wrapper, {}, [className])} onClick={onSelect}>
            {value}
            {isActive && (
                <div className={css.icon} data-testid="selected-icon">
                    <SelectedIcon />
                </div>
            )}
        </div>
    );
};

import { useState } from "react";
import cx from "classnames";
import { DropdownItem } from "./dropdown-item/dropdown-item.tsx";
import { useOutsideClick } from "shared/libs/useOutsideClick.ts";
import { ReactComponent as OpenIcon } from "./icons/open.svg";
import { ReactComponent as CloseIcon } from "./icons/close.svg";
import css from "./dropdown.module.scss";

export interface IDropdownItem {
    id: number;
    value: string | null;
}

interface DropdownProps {
    currentItem: IDropdownItem | string;
    setCurrentItem: (id: number) => void;
    items: IDropdownItem[];
}

export const Dropdown = ({ setCurrentItem, items, currentItem }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useOutsideClick(() => setIsOpen(false));

    const currentItemValue = typeof currentItem !== "string" ? currentItem.value : currentItem;

    return (
        <div className={css.wrapper}>
            <div role="presentation" className={css.container} onClick={() => setIsOpen(prev => !prev)} ref={ref}>
                <div className={cx(css.main, isOpen && css.main_opened)}>
                    <span>{currentItemValue}</span>
                    {isOpen ? <OpenIcon /> : <CloseIcon />}
                </div>

                <div className={css.hidden}>
                    <div className={cx(isOpen ? css.visible : css.invisible, css.block)}>
                        {items.map(item => (
                            <DropdownItem
                                key={item.id}
                                item={item}
                                select={setCurrentItem}
                                isActive={currentItem === item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

import { useState } from "react";
import cx from "classnames";
import { DropdownItem } from "./dropdown-item/dropdown-item.tsx";
import { useOutsideClick } from "shared/libs/useOutsideClick.ts";
import { ReactComponent as OpenIcon } from "./icons/open.svg";
import { ReactComponent as CloseIcon } from "./icons/close.svg";
import css from "./dropdown.module.scss";

interface DropdownProps<T> {
    currentItem: T | null;
    setCurrentItem: (value: T) => void;
    items: T[];
}

export const Dropdown = ({ setCurrentItem, items, currentItem }: DropdownProps<any>) => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useOutsideClick(() => setIsOpen(false));

    return (
        <div className={css.wrapper}>
            <div role="presentation" className={css.container} onClick={() => setIsOpen(prev => !prev)} ref={ref}>
                <div className={cx(css.main, isOpen && css.main_opened)}>
                    <span>{currentItem}</span>
                    {isOpen ? <OpenIcon /> : <CloseIcon />}
                </div>

                <div className={css.hidden}>
                    <div className={cx(isOpen ? css.visible : css.invisible, css.block)}>
                        {items.map(item => (
                            <DropdownItem
                                key={item}
                                text={item}
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

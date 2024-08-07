import { useState } from "react";
import { useOutsideClick } from "shared/libs/useOutsideClick.ts";
import { classNames } from "shared/libs";
import { DropdownItem } from "./dropdown-item/DropdownItem.tsx";
import { ReactComponent as OpenIcon } from "./icons/open.svg";
import { ReactComponent as CloseIcon } from "./icons/close.svg";
import css from "./Dropdown.module.scss";

export interface IDropdownItem {
    id: number;
    value: string | null;
}

interface DropdownProps {
    title: string,
    currentItem: IDropdownItem | null;
    setCurrentItem: (id: number) => void;
    items: IDropdownItem[];
	className?: string,
}

export const Dropdown = ({ className, setCurrentItem, items, currentItem, title }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useOutsideClick(() => setIsOpen(false));

    return (
        <div
            ref={ref}
            onClick={() => setIsOpen((prev) => !prev)}
            className={classNames(css.wrapper, {}, [className])}
        >
            <div
                data-testid="open-close"
                className={classNames(css.main, { [css.main_opened]: isOpen })}
            >
                <span>{currentItem ? currentItem.value : title}</span>
                {
                    isOpen
                        ? <OpenIcon data-testid="open-icon" />
                        : <CloseIcon data-testid="close-icon" />
                }
            </div>

            <div
                className={classNames(css.block, {
                    [css.visible]: isOpen,
                    [css.invisible]: !isOpen
                })}
                data-testid="hidden"
            >
                {items.map((item) => (
                    <DropdownItem
                        key={item.id}
                        item={item}
                        select={setCurrentItem}
                        isActive={currentItem === item}
                    />
                ))}
            </div>
        </div>
    );
};

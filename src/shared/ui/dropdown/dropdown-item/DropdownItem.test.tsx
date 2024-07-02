import { fireEvent, render, screen } from "@testing-library/react";
import { IDropdownItem } from "shared/ui/dropdown/Dropdown.tsx";
import { DropdownItem } from "./DropdownItem";

const item: IDropdownItem = {
    id: 1,
    value: "Item 1"
};

const selectMock = jest.fn();

describe("DropdownItem", () => {
    test("Renders item value", () => {
        render(<DropdownItem item={item} isActive={false} select={selectMock} />);
        expect(screen.getByText("Item 1")).toBeInTheDocument();
    });

    test("Renders selected icon when active", () => {
        render(<DropdownItem item={item} isActive select={selectMock} />);
        expect(screen.getByTestId("selected-icon")).toBeInTheDocument();
    });

    test("Does not render selected icon when not active", () => {
        render(<DropdownItem item={item} isActive={false} select={selectMock} />);
        expect(screen.queryByTestId("selected-icon")).not.toBeInTheDocument();
    });

    test("Calls select function with item id when clicked", () => {
        render(<DropdownItem item={item} isActive={false} select={selectMock} />);
        fireEvent.click(screen.getByText("Item 1"));
        expect(selectMock).toHaveBeenCalledWith(1);
    });
});

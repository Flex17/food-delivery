import { fireEvent, render, screen } from "@testing-library/react";
import { Dropdown, IDropdownItem } from "shared/ui/dropdown/Dropdown.tsx";

const items: IDropdownItem[] = [
    { id: 1, value: "Item 1" },
    { id: 2, value: "Item 2" },
    { id: 3, value: "Item 3" },
];

const setCurrentItemMock = jest.fn();

describe("Dropdown", () => {
    test("Render title", () => {
        render(<Dropdown title="Title" currentItem={null} setCurrentItem={setCurrentItemMock} items={items} />);
        expect(screen.getByText("Title")).toBeInTheDocument();
    });

    test("Render current item", () => {
        render(<Dropdown title="Title" currentItem={items[0]} setCurrentItem={setCurrentItemMock} items={items} />);
        expect(screen.queryAllByText("Item 1")).toHaveLength(2);
    });

    test("Toggles dropdown on click", () => {
        render(<Dropdown title="Title" currentItem={items[0]} setCurrentItem={setCurrentItemMock} items={items} />);
        const container = screen.getByTestId("open-close");

        expect(screen.getByTestId("close-icon")).toBeInTheDocument();

        fireEvent.click(container);
        expect(screen.getByTestId("open-icon")).toBeInTheDocument();

        fireEvent.click(container);
        expect(screen.getByTestId("close-icon")).toBeInTheDocument();
    });

    test("Renders dropdown items when open", () => {
        render(<Dropdown title="Title" currentItem={null} setCurrentItem={setCurrentItemMock} items={items} />);
        const container = screen.getByTestId("open-close");

        fireEvent.click(container);

        expect(screen.getByTestId("open-icon")).toBeInTheDocument();

        items.forEach(item => {
            expect(screen.getByText(item.value as string)).toBeInTheDocument();
        });
    });

    test("Calls setCurrentItem with item id when item is clicked", () => {
        render(<Dropdown title="Titlte" currentItem={null} setCurrentItem={setCurrentItemMock} items={items} />);
        const container = screen.getByTestId("open-close");
        fireEvent.click(container);

        const item = screen.getByText("Item 2");
        fireEvent.click(item);

        expect(setCurrentItemMock).toHaveBeenCalledWith(2);
    });

    test("Closes dropdown on outside click", () => {
        render(
            <div>
                <Dropdown title="Titlte" currentItem={null} setCurrentItem={setCurrentItemMock} items={items} />
                <div data-testid="outside-element">Outside Element</div>
            </div>
        );
        const container = screen.getByTestId("open-close");
        const outsideElement = screen.getByTestId("outside-element");
        const hiddenElement = screen.getByTestId("hidden");

        fireEvent.click(container);

        fireEvent.mouseDown(outsideElement);

        expect(hiddenElement.clientHeight === 0).toEqual(true);
    });
});

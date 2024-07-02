import { render, screen } from "@testing-library/react";
import { ProductQuantity } from "shared/ui";

describe("ProductQuantity", () => {
    test("Renders with quantity", () => {
        render(<ProductQuantity quantity={1} />);
        expect(screen.getByText("1")).toBeInTheDocument();
    });
});

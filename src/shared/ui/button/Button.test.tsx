import { Button } from "shared/ui";
import { render, screen } from "@testing-library/react";
import { ButtonSize, ButtonTheme } from "shared/ui/button/Button.tsx";

describe("Button", () => {
    test("Render", () => {
        render(<Button>hello</Button>);
        expect(screen.getByText("hello")).toBeInTheDocument();
    });

    test("With additional class", () => {
        render(<Button className="class1 class2">hello</Button>);
        expect(screen.getByText("hello")).toHaveClass("class1", "class2");
    });

    test("Dark theme", () => {
        render(<Button theme={ButtonTheme.DARK}>hello</Button>);
        expect(screen.getByText("hello")).toHaveClass("dark");
    });

    test("Outline theme", () => {
        render(<Button theme={ButtonTheme.OUTLINE}>hello</Button>);
        expect(screen.getByText("hello")).toHaveClass("outline");
    });

    test("Default theme", () => {
        render(<Button>hello</Button>);
        expect(screen.getByText("hello")).toHaveClass("default");
    });

    test("Error theme", () => {
        render(<Button theme={ButtonTheme.ERROR}>hello</Button>);
        expect(screen.getByText("hello")).toHaveClass("error");
    });

    test("Rounded", () => {
        render(<Button rounded>hello</Button>);
        expect(screen.getByText("hello")).toHaveClass("rounded");
    });

    test("Size m", () => {
        render(<Button size={ButtonSize.M}>hello</Button>);
        expect(screen.getByText("hello")).toHaveClass("size_m");
    });

    test("Size l", () => {
        render(<Button size={ButtonSize.L}>hello</Button>);
        expect(screen.getByText("hello")).toHaveClass("size_l");
    });

    test("Size xl", () => {
        render(<Button size={ButtonSize.XL}>hello</Button>);
        expect(screen.getByText("hello")).toHaveClass("size_xl");
    });
});

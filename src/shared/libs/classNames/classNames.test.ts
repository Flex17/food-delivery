import { classNames } from "shared/libs";

describe("ClassNames", () => {
    test("with only first param", () => {
        expect(classNames("hello")).toBe("hello");
    });
    test("With additional classes", () => {
        const expected = "hello class1 class2";
        expect(classNames("hello", {}, ["class1", "class2"])).toBe(expected);
    });
    test("With mods", () => {
        const expected = "hello class1 class2 hovered scrollable";
        expect(classNames("hello", { hovered: true, scrollable: true }, ["class1", "class2"])).toBe(expected);
    });
    test("With mods false", () => {
        const expected = "hello class1 class2 hovered";
        expect(classNames("hello", { hovered: true, scrollable: false }, ["class1", "class2"])).toBe(expected);
    });
    test("With mods undefined", () => {
        const expected = "hello class1 class2 hovered";
        expect(classNames("hello", { hovered: true, scrollable: undefined }, ["class1", "class2"])).toBe(expected);
    });
});

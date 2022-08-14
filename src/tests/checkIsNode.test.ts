import checkIsNode from "../checkIsNode";

describe("check basic type", () => {
    it("string value would fail", () => {
        expect(checkIsNode("")).toBeFalsy();
    });

    it("number would fail", () => {
        expect(checkIsNode(5)).toBeFalsy();
    });

    it("a random obj would fail", () => {
        expect(checkIsNode({ a: 1 })).toBeFalsy();
    });

    it("can be an empty array", () => {
        expect(checkIsNode([])).toBeTruthy();
    });
});

describe("check element type", () => {
    it("one element", () => {
        const value = [
            {
                type: "paragraph",
                children: [],
            },
        ];
        expect(checkIsNode(value)).toBeTruthy();
    });

    it("a not valid element", () => {
        const value = [
            {
                type: "paragraph",
            },
        ];
        expect(checkIsNode(value)).toBeFalsy();
    });

    it("a non-element and a non-text obj", () => {
        const value = [
            {
                name: "yu",
            },
        ];
        expect(checkIsNode(value)).toBeFalsy();
    });
});

describe("check text", () => {
    it("simple text", () => {
        const value = [
            {
                text: "abc",
            },
        ];
        expect(checkIsNode(value)).toBeTruthy();
    });
});

describe("check nested obj", () => {
    it("nested one", () => {
        const value = [
            {
                type: "paragraph",
                children: [{ text: "abc" }],
            },
        ];
        expect(checkIsNode(value)).toBeTruthy();
    });

    it("bad nested number", () => {
        const value = [
            {
                type: "paragraph",
                children: [1, 2, 3],
            },
        ];
        expect(checkIsNode(value)).toBeFalsy();
    });

    it("bad nested obj", () => {
        const value = [
            {
                type: "paragraph",
                children: [{}],
            },
        ];
        expect(checkIsNode(value)).toBeFalsy();
    });

    it("bad nested element", () => {
        const value = [
            {
                type: "paragraph",
                children: [{ type: "paragraph" }],
            },
        ];
        expect(checkIsNode(value)).toBeFalsy();
    });
});

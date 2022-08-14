import React from "react";
import { render, screen } from "@testing-library/react";
import RichTextRenderer from "../RichTextRenderer";
import "@testing-library/jest-dom/extend-expect";

describe("RichTextRenderer parse failure", () => {
    beforeEach(() => {
        /* disable error log
          https://stackoverflow.com/a/58717352
         */
        jest.spyOn(console, "error").mockImplementation(() => {});
    });

    test("if data is not valid json format, return parse error", () => {
        const data = "bad_data";

        render(<RichTextRenderer data={data} />);
        const element = screen.getByTestId("rich-text");
        expect(element).toHaveTextContent(/json parse 错误/);
    });
});

describe("RichTextRenderer check node interface", () => {
    it("bad format", () => {
        const jsonData = [
            {
                name: "yu",
            },
        ];
        const data = JSON.stringify(jsonData);

        render(<RichTextRenderer data={data} />);
        const element = screen.getByTestId("rich-text");
        expect(element).toHaveTextContent(
            /parsed value 的 interface 不符合需求/
        );
    });
});

/**
 * Test if the RichTextRenderer component can render the data correctly.
 */
describe("RichTextRenderer simple test", () => {
    test("render a simple text", () => {
        const jsonData = [
            {
                text: "simple text",
            },
        ];
        const data = JSON.stringify(jsonData);
        render(<RichTextRenderer data={data} />);

        const element = screen.getByTestId("rich-text");
        expect(element).toHaveTextContent("simple text");
    });

    test("paragraph with one text child", () => {
        const jsonData = [
            {
                type: "paragraph",
                children: [{ text: "新しい 服" }],
            },
        ];
        const data = JSON.stringify(jsonData);
        render(<RichTextRenderer data={data} />);

        const element = screen.getByTestId("rich-text");
        expect(element).toHaveTextContent("新しい 服");
    });

    test("render paragraph with filler", () => {
        const jsonData = [
            {
                type: "paragraph",
                children: [
                    {
                        type: "filler",
                        children: [{ text: "" }],
                    },
                    { text: "新しい 服" },
                ],
            },
        ];
        const data = JSON.stringify(jsonData);
        render(<RichTextRenderer data={data} />);

        const element = screen.getByTestId("filler");
        expect(element).not.toBeNull();
    });
});

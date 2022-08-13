import React from "react";
import { render, screen } from "@testing-library/react";
import RichTextRenderer from "../RichTextRenderer";
import "@testing-library/jest-dom/extend-expect";

test("render rich text renderer", () => {
    render(<RichTextRenderer data="abc" />);

    const element = screen.getByTestId("rich-text");
    expect(element).toHaveTextContent("abc");
});

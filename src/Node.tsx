import React from "react";
import Filler from "./Filler";
import Leaf from "./Leaf";
import Paragraph from "./elements/Paragraph";

//@ts-ignore
const renderElement = (props) => {
    switch (props.element.type) {
        case "filler":
            return <Filler />;
        case "paragraph":
            return <Paragraph {...props} />;
        default:
            console.error(`unknown element type: ${props.element.type}`);
            return <></>;
    }
};

//@ts-ignore
const renderText = (props) => {
    return <Leaf {...props} />;
};

export default function Node({ value }: any) {
    if (value.type) {
        return renderElement({
            element: value,
        });
    } else {
        return renderText({ text: value.text });
    }
}

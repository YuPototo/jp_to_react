import React from "react";

type Props = {
    data: string;
};

export default function RichTextRenderer({ data }: Props) {
    return <div data-testid="rich-text">{data}</div>;
}

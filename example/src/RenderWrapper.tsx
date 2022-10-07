import React from 'react'
import RichTextRenderer from '../../dist/RichTextRenderer'
import { INode } from '../../dist/type'

type Props = {
    data: INode[]
}

export default function RenderWrapper({ data }: Props) {
    return (
        <div
            style={{
                margin: '20px 10px',
                padding: '5px',
                backgroundColor: '#e3ffea',
            }}
        >
            <RichTextRenderer data={data} />
        </div>
    )
}

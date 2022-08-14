import React from 'react'
import RichTextRenderer from '../../dist/RichTextRenderer'

type Props = {
    data: string
}

export default function RenderWrapper({ data }: Props) {
    return (
        <div
            style={{
                margin: '20px 10px',
                padding: '20px',
                backgroundColor: 'lightblue',
            }}
        >
            <RichTextRenderer data={data} />
        </div>
    )
}

import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function TipExample2() {
    const data = [
        {
            type: 'paragraph',
            children: [
                {
                    type: 'tip',
                    tip: '这是 tip',
                    children: [{ text: '这是加粗的文本', bold: true }],
                },
            ],
        },
    ]

    return (
        <Example title="Simple Tip">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

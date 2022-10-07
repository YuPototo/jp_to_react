import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function TipSimple() {
    const data = [
        {
            type: 'paragraph',
            children: [
                {
                    type: 'tip',
                    tip: '这是 tip',
                    children: [{ text: '这是文本' }],
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

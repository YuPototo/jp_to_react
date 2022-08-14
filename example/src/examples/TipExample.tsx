import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function TipSimple() {
    const baseData = [
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

    const data = JSON.stringify(baseData)

    return (
        <Example title="Simple Tip">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

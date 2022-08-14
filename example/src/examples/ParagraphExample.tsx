import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function Paragraph() {
    const baseData = [
        {
            type: 'paragraph',
            children: [{ text: 'This is a paragraph' }],
        },
    ]

    const data = JSON.stringify(baseData)

    return (
        <Example title="One Simple Paragraph">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function Paragraph() {
    const data = [
        {
            type: 'paragraph',
            children: [{ text: 'This is a paragraph' }],
        },
    ]

    return (
        <Example title="One Simple Paragraph">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

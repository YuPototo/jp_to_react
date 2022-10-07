import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function ParagraphTwo() {
    const data = [
        {
            type: 'paragraph',
            children: [{ text: 'This is a paragraph' }],
        },
        {
            type: 'paragraph',
            children: [{ text: 'This is another paragraph' }],
        },
    ]

    return (
        <Example title="Two Paragraphs">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

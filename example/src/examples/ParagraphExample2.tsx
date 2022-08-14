import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function ParagraphTwo() {
    const baseData = [
        {
            type: 'paragraph',
            children: [{ text: 'This is a paragraph' }],
        },
        {
            type: 'paragraph',
            children: [{ text: 'This is another paragraph' }],
        },
    ]

    const data = JSON.stringify(baseData)

    return (
        <Example title="Two Paragraphs">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

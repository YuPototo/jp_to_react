import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function Filler() {
    const data = [
        {
            type: 'paragraph',
            children: [
                { text: 'This is a filler:    ' },
                { type: 'filler', children: [{ text: '' }] },
            ],
        },
    ]

    return (
        <Example title="Filler">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

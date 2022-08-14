import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function Filler() {
    const baseData = [
        {
            type: 'paragraph',
            children: [
                { text: 'This is a filler:    ' },
                { type: 'filler', children: [{ text: '' }] },
            ],
        },
    ]

    const data = JSON.stringify(baseData)

    return (
        <Example title="Filler">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

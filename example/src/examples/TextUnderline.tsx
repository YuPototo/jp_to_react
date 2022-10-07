import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function UnderlineText() {
    const data = [
        {
            text: 'this is underline',
            underline: true,
        },
    ]

    return (
        <Example title="Underline">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

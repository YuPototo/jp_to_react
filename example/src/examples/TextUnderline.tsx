import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function UnderlineText() {
    const baseData = [
        {
            text: 'this is underline',
            underline: true,
        },
    ]

    const data = JSON.stringify(baseData)

    return (
        <Example title="Underline">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

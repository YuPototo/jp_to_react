import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function BoldText() {
    const data = [
        {
            text: 'this is bold',
            bold: true,
        },
    ]

    return (
        <Example title="Bold">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function BoldText() {
    const baseData = [
        {
            text: 'this is bold',
            bold: true,
        },
    ]

    const data = JSON.stringify(baseData)

    return (
        <Example title="Bold">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

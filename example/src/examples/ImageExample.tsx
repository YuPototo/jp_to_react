import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function ImageExmaple() {
    const baseData = [
        {
            type: 'image',
            src: 'https://picsum.photos/200/300',
            children: [{ text: '' }],
        },
    ]

    const data = JSON.stringify(baseData)

    return (
        <Example title="Image">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

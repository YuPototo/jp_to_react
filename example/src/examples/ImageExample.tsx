import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function ImageExmaple() {
    const data = [
        {
            type: 'image',
            alt: 'this is alt',
            src: 'https://picsum.photos/200/300',
            children: [{ text: '' }],
        },
    ]

    return (
        <Example title="Image">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

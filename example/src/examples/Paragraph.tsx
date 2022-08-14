import React from 'react'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function Paragraph() {
    const baseData = [
        {
            type: 'paragraph',
            children: [{ text: 'This is a paragraph' }],
        },
    ]

    const data = JSON.stringify(baseData)

    return (
        <div>
            <h2 style={{ margin: '20px auto' }}>Paragraph</h2>
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </div>
    )
}

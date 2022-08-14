import React from 'react'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function Filler() {
    const baseData = [
        {
            type: 'paragraph',
            children: [
                { text: 'This is a filler:    ' },
                { type: 'filler', children: [] },
            ],
        },
    ]

    const data = JSON.stringify(baseData)

    return (
        <div>
            <h2 style={{ margin: '20px auto' }}>Filler</h2>
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </div>
    )
}

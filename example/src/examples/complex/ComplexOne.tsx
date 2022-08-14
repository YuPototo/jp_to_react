import React from 'react'
import Example from '../../Example'
import RawDataViewer from '../../RawDataViewer'
import RenderWrapper from '../../RenderWrapper'

export default function ComplexOne() {
    const baseData = [
        {
            type: 'paragraph',
            children: [
                { text: '新しい　服' },
                {
                    type: 'filler',
                    children: [{ text: '' }],
                },
                { text: ' 買いました。' },
            ],
        },
    ]

    const data = JSON.stringify(baseData)

    return (
        <Example title="One Sentence">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

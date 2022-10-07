import React from 'react'
import Example from '../../Example'
import RawDataViewer from '../../RawDataViewer'
import RenderWrapper from '../../RenderWrapper'

export default function ComplexOne() {
    const data = [
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

    return (
        <Example title="One Sentence">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

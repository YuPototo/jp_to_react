import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function BoldAndUnderline() {
    const data = [
        {
            type: 'paragraph',
            children: [
                { text: 'This is ' },
                {
                    text: 'underline and bold',
                    underline: true,
                    bold: true,
                },
                { text: '.' },
            ],
        },
    ]

    return (
        <Example title="Underline and bold">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

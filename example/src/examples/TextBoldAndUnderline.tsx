import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function BoldAndUnderline() {
    const baseData = [
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

    const data = JSON.stringify(baseData)

    return (
        <Example title="Underline and bold">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

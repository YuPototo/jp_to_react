import React from 'react'
import RichTextRenderer from '../../../dist/RichTextRenderer'

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
            <h2>Example with Richt text renderer</h2>
            <RichTextRenderer data={data} />
        </div>
    )
}

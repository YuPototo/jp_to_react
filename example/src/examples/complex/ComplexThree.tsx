import React from 'react'
import Example from '../../Example'
import RawDataViewer from '../../RawDataViewer'
import RenderWrapper from '../../RenderWrapper'

export default function ComplexThree() {
    const data = [
        {
            type: 'paragraph',
            children: [
                {
                    type: 'tip',
                    tip: 'ざっし',
                    children: [{ text: '雑誌' }],
                },
                { text: 'を　' },
                {
                    type: 'tip',
                    tip: 'か',
                    children: [{ text: '買' }],
                },
                {
                    text: 'いに',
                },
                {
                    type: 'tip',
                    tip: 'い',
                    children: [{ text: '行' }],
                },
                {
                    text: 'きました。',
                },
            ],
        },
        {
            type: 'paragraph',
            children: [
                {
                    text: '去买杂志了。',
                },
            ],
        },
    ]

    return (
        <Example title="An explanation from real question">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

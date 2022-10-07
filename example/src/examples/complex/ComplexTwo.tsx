import React from 'react'
import Example from '../../Example'
import RawDataViewer from '../../RawDataViewer'
import RenderWrapper from '../../RenderWrapper'

export default function ComplexTwo() {
    const data = [
        {
            type: 'paragraph',
            children: [
                { text: 'これが相手のチームを倒すゲームで、敵が' },
                {
                    text: '絶滅',
                    bold: true,
                    underline: true,
                },
                {
                    text: 'したら、勝っだよ。',
                },
            ],
        },
    ]

    return (
        <Example title="An Option from real question">
            <RawDataViewer data={data} />
            <RenderWrapper data={data} />
        </Example>
    )
}

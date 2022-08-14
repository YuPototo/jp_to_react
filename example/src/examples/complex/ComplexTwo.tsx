import React from 'react'
import Example from '../../Example'
import RawDataViewer from '../../RawDataViewer'
import RenderWrapper from '../../RenderWrapper'

export default function ComplexTwo() {
    const baseData = [
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

    const data = JSON.stringify(baseData)

    return (
        <Example title="An Option from real question">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

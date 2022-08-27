import React from 'react'
import Example from '../Example'
import RawDataViewer from '../RawDataViewer'
import RenderWrapper from '../RenderWrapper'

export default function ImageExmaple2() {
    const baseData = [
        {
            type: 'image',
            alt: 'This is Alt',
            src: 'https://assets.riyu.love/images/not_exist.jpg',
            children: [{ text: '' }],
        },
    ]

    const data = JSON.stringify(baseData)

    return (
        <Example title="不存在的 Image">
            <RawDataViewer data={baseData} />
            <RenderWrapper data={data} />
        </Example>
    )
}

import React from 'react'
import checkIsNode from './checkIsNode'

import Nodes from './Nodes'
import { INode } from './type'

type Props = {
    data: INode[]
}

export default function RichTextRenderer({ data }: Props) {
    // step2: validate value is INode[]
    if (!checkIsNode(data)) {
        console.error('parsed value 的 interface 不符合需求')
        return (
            <div data-testid="rich-text">
                parsed value 的 interface 不符合需求
            </div>
        )
    }

    // step3: render
    return (
        <div data-testid="rich-text" className="jp-rich-text">
            <Nodes value={data} />
        </div>
    )
}

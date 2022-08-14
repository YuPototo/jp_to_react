import React from 'react'
import Nodes from '../Nodes'
import { IElement } from '../type'

type Props = {
    element: IElement
}

export default function Paragraph({ element }: Props) {
    return (
        <div>
            <Nodes value={element.children} />
        </div>
    )
}

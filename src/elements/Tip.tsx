import React, { ReactElement } from 'react'
import Nodes from '../Nodes'
import { ITip } from '../type'

type Props = {
    element: ITip
}

export default function Tip({ element }: Props): ReactElement {
    return (
        <span className="jp-tip">
            <Nodes value={element.children} />
            <span className="jp-tip-content">
                <span>{element.tip}</span>
            </span>
        </span>
    )
}

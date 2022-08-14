import React from 'react'
import Node from './Node'
import { nanoid } from './utils/nanoid'
import { INode } from './type'

type Props = {
    value: INode[]
}

export default function Nodes({ value }: Props) {
    return (
        <>
            {value.map((node) => (
                <div key={nanoid()}>
                    <Node value={node} />
                </div>
            ))}
        </>
    )
}

import React from 'react'
import Nodes from '../Nodes'

export default function Paragraph({ element }: any) {
    return (
        <p>
            <Nodes value={element.children} />
        </p>
    )
}

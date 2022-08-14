import React from 'react'
import Filler from './elements/Filler'
import Leaf from './Leaf'
import Paragraph from './elements/Paragraph'
import { IElement, INode } from './type'
import { isElement } from './utils/isElement'

const renderElement = (element: IElement) => {
    switch (element.type) {
        case 'filler':
            return <Filler />
        case 'paragraph':
            return <Paragraph element={element} />
        default:
            console.error(`unknown element type: ${element.type}`)
            return <></>
    }
}

type Props = {
    value: INode
}

export default function Node({ value }: Props) {
    if (isElement(value)) {
        return renderElement(value)
    }
    return <Leaf text={value.text} />
}

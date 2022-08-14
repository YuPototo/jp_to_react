import React from 'react'

type Props = {
    text: string
}

export default function Leaf({ text }: Props) {
    return <span>{text}</span>
}

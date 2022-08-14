import clsx from 'clsx'
import React from 'react'

type Props = {
    text: string
    bold?: boolean
    underline?: boolean
}

export default function Leaf({ text, bold, underline }: Props) {
    return (
        <span className={clsx({ 'jp-bold': bold, 'jp-underline': underline })}>
            {text}
        </span>
    )
}

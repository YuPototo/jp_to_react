import React from 'react'

type Props = {
    title: string
    children: React.ReactNode
}

export default function Example({ title, children }: Props) {
    return (
        <div style={{ marginBottom: '60px' }}>
            <h3 style={{ margin: '20px auto' }}>{title}</h3>
            {children}
        </div>
    )
}

import React from 'react'
import ReactJson from 'react-json-view'

type Props = {
    data: object
}

export default function RawDataViewer({ data }: Props) {
    return (
        <div style={{ margin: '20px 10px' }}>
            <ReactJson
                src={data}
                name={false}
                displayDataTypes={false}
                displayObjectSize={false}
                collapsed={true}
            />
        </div>
    )
}

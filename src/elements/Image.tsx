import React, { ReactElement } from 'react'
import { IImage } from '../type'

type Props = {
    element: IImage
}

export default function Image({ element }: Props): ReactElement {
    return (
        <div className="jp-image">
            <img src={element.src} alt="image"></img>
        </div>
    )
}

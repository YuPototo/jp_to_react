export interface IElement {
    type: string
    children: INode[]
}

export interface ITip extends IElement {
    type: 'tip'
    tip: string
}

export interface IImage extends IElement {
    type: 'image'
    src: string
    children: [{ text: '' }]
}

export interface IText {
    text: string
}

export type INode = IElement | IText

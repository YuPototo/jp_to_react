export interface IElement {
    type: string
    children: INode[]
}

export interface ITip extends IElement {
    type: 'tip'
    tip: string
}

export interface IText {
    text: string
}

export type INode = IElement | IText

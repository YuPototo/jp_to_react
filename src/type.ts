// todo:

export interface IElement {
    type?: string;
    children?: INode[];
}

export interface IText {
    text: string;
}

export type INode = IElement | IText;

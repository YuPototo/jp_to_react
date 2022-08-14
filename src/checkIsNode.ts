import { IElement, INode } from "./type";

function isValidText(value: any) {
    if (value.text === undefined) {
        return false;
    }
    return true;
}

function isElement(value: any) {
    return value.type !== undefined;
}

function isValidElement(value: any): value is IElement {
    if (value.children === undefined) {
        return false;
    }
    return true;
}

// todo
export default function checkIsNode(value: unknown): value is INode[] {
    const isArray = Array.isArray(value);

    // false case 1
    if (!isArray) return false;

    for (const node of value) {
        if (isElement(node)) {
            // false case 2
            if (!isValidElement(node)) return false;

            // false case 3
            if (!checkIsNode(node.children)) return false;
        } else {
            if (!isValidText(node)) return false;
        }
    }

    return true;
}

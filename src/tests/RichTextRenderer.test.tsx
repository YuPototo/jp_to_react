import React from 'react'
import { render, screen } from '@testing-library/react'
import RichTextRenderer from '../RichTextRenderer'
import '@testing-library/jest-dom/extend-expect'
import { INode } from '../type'

describe('RichTextRenderer check node interface', () => {
    it('bad format', () => {
        const data = [
            {
                name: 'yu',
            },
        ]

        //@ts-ignore
        render(<RichTextRenderer data={data} />)
        const element = screen.getByTestId('rich-text')
        expect(element).toHaveTextContent(
            /parsed value 的 interface 不符合需求/
        )
    })
})

/**
 * Test if the RichTextRenderer component can render data correctly.
 */
describe('RichTextRenderer simple test', () => {
    it('render a simple text', () => {
        const data = [
            {
                text: 'simple text',
            },
        ]
        render(<RichTextRenderer data={data} />)

        const element = screen.getByTestId('rich-text')
        expect(element).toHaveTextContent('simple text')
    })

    it('paragraph with one text child', () => {
        const data = [
            {
                type: 'paragraph',
                children: [{ text: '新しい 服' }],
            },
        ]
        render(<RichTextRenderer data={data} />)

        const element = screen.getByTestId('rich-text')
        expect(element).toHaveTextContent('新しい 服')
    })

    it('render paragraph with filler', () => {
        const data = [
            {
                type: 'paragraph',
                children: [
                    {
                        type: 'filler',
                        children: [{ text: '' }],
                    },
                    { text: '新しい 服' },
                ],
            },
        ]
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-filler')[0]
        expect(element).not.toBeUndefined()
    })
})

describe('Render text', () => {
    it('should render bold text', () => {
        const data = [
            {
                text: 'bold text',
                bold: true,
            },
        ]
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-bold')[0]
        expect(element).toHaveTextContent('bold text')
    })

    it('should render underline', () => {
        const data = [
            {
                text: 'underline text',
                underline: true,
            },
        ]
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-underline')[0]
        expect(element).toHaveTextContent('underline text')
    })
})

describe('render paragraph', () => {
    it('should add paragraph classname', () => {
        const data = [
            {
                type: 'paragraph',
                children: [{ text: 'this is paragraph' }],
            },
        ]
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-paragraph')[0]
        expect(element).toHaveTextContent('this is paragraph')
    })
})

describe('render tip element', () => {
    it('should render tip element', () => {
        const data = [
            {
                type: 'tip',
                tip: '这是tip',
                children: [
                    {
                        text: '这是文本',
                    },
                ],
            },
        ]
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-tip')[0]
        expect(element).toHaveTextContent('这是文本')
    })
})

describe('render image', () => {
    it('should render image', () => {
        const data = [
            {
                type: 'image',
                src: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                children: [{ text: '' }],
            },
        ]
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-image')[0]
        expect(element).not.toBeUndefined()
    })
})

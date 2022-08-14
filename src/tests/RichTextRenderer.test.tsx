import React from 'react'
import { render, screen } from '@testing-library/react'
import RichTextRenderer from '../RichTextRenderer'
import '@testing-library/jest-dom/extend-expect'

describe('RichTextRenderer parse failure', () => {
    beforeEach(() => {
        /* disable error log
          https://stackoverflow.com/a/58717352
         */
        jest.spyOn(console, 'error').mockImplementation(() => {})
    })

    it('if data is not valid json format, return parse error', () => {
        const data = 'bad_data'

        render(<RichTextRenderer data={data} />)
        const element = screen.getByTestId('rich-text')
        expect(element).toHaveTextContent(/json parse 错误/)
    })
})

describe('RichTextRenderer check node interface', () => {
    it('bad format', () => {
        const jsonData = [
            {
                name: 'yu',
            },
        ]
        const data = JSON.stringify(jsonData)

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
        const jsonData = [
            {
                text: 'simple text',
            },
        ]
        const data = JSON.stringify(jsonData)
        render(<RichTextRenderer data={data} />)

        const element = screen.getByTestId('rich-text')
        expect(element).toHaveTextContent('simple text')
    })

    it('paragraph with one text child', () => {
        const jsonData = [
            {
                type: 'paragraph',
                children: [{ text: '新しい 服' }],
            },
        ]
        const data = JSON.stringify(jsonData)
        render(<RichTextRenderer data={data} />)

        const element = screen.getByTestId('rich-text')
        expect(element).toHaveTextContent('新しい 服')
    })

    it('render paragraph with filler', () => {
        const jsonData = [
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
        const data = JSON.stringify(jsonData)
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-filler')[0]
        expect(element).not.toBeUndefined()
    })
})

describe('Render text', () => {
    it('should render bold text', () => {
        const jsonData = [
            {
                text: 'bold text',
                bold: true,
            },
        ]
        const data = JSON.stringify(jsonData)
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-bold')[0]
        expect(element).toHaveTextContent('bold text')
    })

    it('should render underline', () => {
        const jsonData = [
            {
                text: 'underline text',
                underline: true,
            },
        ]
        const data = JSON.stringify(jsonData)
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-underline')[0]
        expect(element).toHaveTextContent('underline text')
    })
})

describe('render paragraph', () => {
    it('should add paragraph classname', () => {
        const jsonData = [
            {
                type: 'paragraph',
                children: [{ text: 'this is paragraph' }],
            },
        ]
        const data = JSON.stringify(jsonData)
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-paragraph')[0]
        expect(element).toHaveTextContent('this is paragraph')
    })
})

describe('render tip element', () => {
    it('should render tip element', () => {
        const jsonData = [
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
        const data = JSON.stringify(jsonData)
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-tip')[0]
        expect(element).toHaveTextContent('这是文本')
    })
})

describe('render image', () => {
    it('should render image', () => {
        const jsonData = [
            {
                type: 'image',
                src: 'https://www.baidu.com/img/baidu_jgylogo3.gif',
                children: [{ text: '' }],
            },
        ]
        const data = JSON.stringify(jsonData)
        const { container } = render(<RichTextRenderer data={data} />)

        const element = container.getElementsByClassName('jp-image')[0]
        expect(element).not.toBeUndefined()
    })
})

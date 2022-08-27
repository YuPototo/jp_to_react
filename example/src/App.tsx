import React from 'react'
import Filler from './examples/FillerExample'
import Paragraph from './examples/ParagraphExample'
import ParagraphTwo from './examples/ParagraphExample2'
import TextBold from './examples/TextBold'
import BoldAndUnderline from './examples/TextBoldAndUnderline'
import Underline from './examples/TextUnderline'
import TipSimple from './examples/TipExample'
import TipSimpleTwo from './examples/TipExample2'
import ImageExmaple from './examples/ImageExample'
import ImageExmaple2 from './examples/ImageExample2'
import ComplexOne from './examples/complex/ComplexOne'
import ComplexTwo from './examples/complex/ComplexTwo'
import ComplexThree from './examples/complex/ComplexThree'

function App() {
    return (
        <div>
            <section className="section">
                <h2>Text</h2>
                <Underline />

                <TextBold />

                <BoldAndUnderline />
            </section>

            <section className="section">
                <h2>Element</h2>
                <Paragraph />
                <ParagraphTwo />
                <Filler />
                <TipSimple />
                <TipSimpleTwo />
                <ImageExmaple />
                <ImageExmaple2 />
            </section>

            <section className="section">
                <h2>Complex Example</h2>
                <ComplexOne />
                <ComplexTwo />
                <ComplexThree />
            </section>
        </div>
    )
}

export default App

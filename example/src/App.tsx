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
import ComplexOne from './examples/complex/ComplexOne'

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
            </section>

            <section className="section">
                <h2>Complex Example</h2>
                <ComplexOne />
            </section>
        </div>
    )
}

export default App

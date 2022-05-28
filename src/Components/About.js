import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#161616',
        backgroundColor: props.mode === 'dark' ? '#161616' : 'white',
        border: '1px solid',
        borderColor : props.mode === 'dark' ? 'white' : '#161616'
    }

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'}}>
            <h1 className="my-2">About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyse your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyse your text quickly and effectively. Be it word count or character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                           TextUtils is a free character counter tool  that provides instant character count and word count statistics for 
                           a given text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browser such as chrome , Firefox ,Internet Explorer, Safari , Opera.
                            It suits to count character in facebook , blog, books, excel document, pdf document, essays, etc.                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

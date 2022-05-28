import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        //console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleOnChange = (event) => {
        //console.log("text changed");
        setText(event.target.value);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const capitalFirstLetter = () => {
        let words = text.split(" ")
        let uppercaseword = ' '
        words.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword);
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard...", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#222020' : 'white'
                        , color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={() => { setText(''); props.showAlert("Text Cleared...", "success"); }}>Clear text</button>
                <button disabled={text.length === 0} type="submit" onClick={speak} className="btn btn-primary mx-1 my-1">Speak</button>
                <button disabled={text.length === 0} type="submit" onClick={capitalFirstLetter} className="btn btn-primary mx-1 my-1">Capitalize first leter of each word</button>
                <button disabled={text.length === 0} type="submit" onClick={copyText} className="btn btn-primary mx-1 my-1">Copy Text</button>
            </div>
            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary-</h2>
                <p>{text.split(/\s+/).filter((ele)=>{ return ele.length !== 0}).length} <b>words</b>, {text.length} <b>characters</b></p>
                <p>{0.008 * (text.split(/\s+/).filter((ele)=>{ return ele.length !== 0}).length)} <b>Minutes read</b></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here!"}</p>
            </div>
        </>
    )
}

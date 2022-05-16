import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearText = () => {
        setText("")
        props.showAlert("Text cleared!", "success")
    }

    const removeWhiteSpaces = () => {
        let newText = text.trim()
        let newTextArr = newText.split(" ").filter(s => s).join(" ")
        setText(newTextArr)
        props.showAlert("Extra whitespaces are removed!", "success")

    }

    const capitalizeFirstLetter = () => {
        let newText = text.trim()
        newText = newText.split(" ").filter(s => s).join(" ")
        newText = newText.split(" ")
        let fullText = ""
        let empArray = []
        newText.forEach(element => {
            let firstLetterCapitalize = element.slice(0, 1).toUpperCase()
            let remainingLetters = element.slice(1, element.length)
            fullText = firstLetterCapitalize + remainingLetters
            empArray.push(fullText)
        });
        let element = ""
        for (let i = 0; i < empArray.length; i++) {
            element = element + empArray[i] + " ";

        }
        setText(element.trimEnd())
        props.showAlert("First letter of each word is capitalized!", "success")
    }

    const copyToClipboard = () => {
        const text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard!", "success")
    };

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "grey" }} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to Uppercase</button>
                <button onClick={handleLoClick} className="btn btn-primary mx-1">Convert to Lowercase</button>
                <button onClick={handleClearText} className="btn btn-primary mx-1">Clear Text</button>
                <button onClick={removeWhiteSpaces} className="btn btn-primary mx-1">Remove Extra Whitespaces</button>
                <button onClick={capitalizeFirstLetter} className="btn btn-primary mx-1">Capitalize first letter</button>
                <button onClick={copyToClipboard} className="btn btn-primary mx-1">Copy Text</button>
            </div>

            <div className="container my-2" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Your text summary</h2>
                <p>Number of words: {text === "" ? text.split(" ").length - 1 : text.split(" ").length}.</p>
                <p>Number of characters: {text.length}.</p>
                <p>Time to read: {text === "" ? 0 : 0.008 * text.split(" ").length} mins.</p>
                <h2>Preview</h2>
                <p>{text === "" ? "Enter something in the textbox to preview here" : text} </p>
            </div>
        </>
    )
}

export default TextForm
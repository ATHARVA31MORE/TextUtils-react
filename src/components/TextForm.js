import React, {useState} from 'react'



export default function TextForm(props) {
    const HandleUpClick = () => {
        let Text = text.toUpperCase();
        setText(Text);
        props.showAlert('Converted to uppercase','success');
    }
    const HandleLowClick = () => {
        let Text = text.toLowerCase();
        setText(Text);
        props.showAlert('Converted to lowercase','success');
    }
    const HandleClear = () => {
        let Text = '';
        setText(Text);
        props.showAlert('cleared','success');
    }
    const ChangeHandle = (event) => {
        setText(event.target.value);
    }
    const CountWords = (str) => {
        if (typeof str !== 'string') {
            return 0;
        }
        str = str.trim();
        if (str === "") {
            return 0;
        }
        const wordsArray = str.split(" ").length;
        return wordsArray;
    }
    const [text, setText] = useState('Enter Text Here')
    return (
        <>
            <div className="Container">
                <h1 style={{color: props.mode==='light'?'#075363':'white'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={ChangeHandle} style={{backgroundColor: props.mode==='light'?'#075363':'white', color: props.mode==='light'?'white':'#075363'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={HandleUpClick}>ConvertUpCase</button>
                <button className="btn btn-primary mx-1" onClick={HandleLowClick}>ConvertLowCase</button>
                <button className="btn btn-primary mx-1" onClick={HandleClear}>Clear</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'#075363':'white'}}>
                <h2>Your Text Summary</h2>
                <p>{CountWords(text)} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h3>Text Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

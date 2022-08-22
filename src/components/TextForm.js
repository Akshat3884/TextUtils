import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("onchange");
        setText(event.target.value)
    }

    const handleClearClick = (event) =>{
        // console.log("onchange");
        let newText = '';
        setText(newText);
        props.showAlert("Cleared the text", "success");
    }

    const handleCopyClick = (event) =>{
      // console.log("onchange");
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard !", "success");
  }

    const handleRevClick = (event) =>{
        // console.log("onchange");
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reversed the Text", "success");
    }

    const handleLwClick = (event) =>{
        // console.log("onchange");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const [text, setText] = useState('');
  return (
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
  </div>
  <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleUpClick}>Convert To UpperCase</button>
  <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleLwClick}>Convert To LowerCase</button>
  <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleRevClick}>Reverse Text</button>
  <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleCopyClick}>Copy</button>
  <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleClearClick}>Clear Text</button>

  </div>
  <div className="container my-3">
    <h4> Your Text Summary</h4>
    <p>{text.split(" ").length} words , {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text:"Enter Text Above to Preview it Here"}</p>
  </div>
    </>
  )
}

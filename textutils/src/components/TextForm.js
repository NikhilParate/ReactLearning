import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('Uppercase was clicked');
        setText(text.toUpperCase());
    }

    const handleOnChange = (event)=>{
        console.log('Uppercase was clicked');
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter the text here');
  return (
    <div>      
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
  </div>
  )
}

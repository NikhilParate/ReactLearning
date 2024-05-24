import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log('Uppercase was clicked');
        setText(text.toUpperCase());
        props.showAlert('Converted to uppercase', 'success');
    }
    const handleLoClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert('Converted to lowercase', 'success');
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleClearTextClick = ()=>{
        setText('');
        props.showAlert('Text cleared', 'success');
    }
    
    const handleTitleCaseClick = (event)=>{
        var titleCaseText = text.split(' ').map((item)=>{
            return item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();
        });
        let arrayData = titleCaseText.toString();
        setText(arrayData.replaceAll(",", " "));
    }

    const [text, setText] = useState('');

  return (
    <>
        <div className='container' style={{color: props.mode === 'dark'? 'white' : '#042743'}}>      
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" 
                style={{backgroundColor: props.mode === 'light'? 'white' : 'grey', color : props.mode === 'dark'? 'white' : '#042743'}} 
                value={text} onChange={handleOnChange}>

                </textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearTextClick}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleTitleCaseClick}>Title Case</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
            <h3>Your text summary</h3>
            <p>{text.split(' ').length - 1} words, {text.length} characters.</p>
            <p>{0.008 * text.split(' ').length} Minutes to read.</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : 'Enter something to preview it.'}</p>
        </div>
    </>
  )
}

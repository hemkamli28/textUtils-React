import React, { useState } from 'react';
// import PropTypes from 'prop-types'

export default function TextForm(props) {
        const handleOnChange = (event) => {
          setText(event.target.value);
      }

      const handleUpClick = () => {
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("success","Converted To Uppercase")
      }

      const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success","Converted To LowerCase")
      }

      const handleClClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("warning","Text Cleared")
      }

      // const handleTrClick = () =>{
      //   let newText = text.toLocaleUpperCase();
      //   setText(newText);
      // }
      
      const handleCopy = () =>{
          let text = document.getElementById("tb");
          text.select();
          navigator.clipboard.writeText(text.value);
          props.showAlert("success","Text Coppied to CLipboard")

      }

      const handlExSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success","Extra Space Removed")

    }
  const [text, setText] = useState('');

  return (
    <>
    
        <div className={`container my-4 text-${props.mode === 'light'?'black':'white'}`}>
        <h1>Enter Text for Analyze:</h1>
        <textarea className="form-control" id='tb' value={text} style={{backgroundColor : props.mode === 'light'?'#CFECEC':'#15317E' , color :props.mode === 'light'?'black':'white'}} onChange={handleOnChange} rows ="8"></textarea>
        <button hidden={text.length===0} className="btn btn-warning mx-3 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
        <button hidden={text.length===0} className="btn btn-warning mx-3 my-3" onClick={handleLowClick}>Convert to LowerCase</button>
        <button hidden={text.length===0} className="btn btn-warning mx-3 my-3" onClick={handleClClick}>Clear Text</button>
        <button hidden={text.length===0} className="btn btn-warning mx-3 my-3" onClick={handleCopy}>Copy Text</button>
        <button hidden={text.length===0} className="btn btn-warning mx-2 my-3" onClick={handlExSpace}>Remove Extra Space</button>
        </div>

        <div className={`container my-3 text-${props.mode === 'light'?'black':'white'}`}>
          <h2>Entered Text Summary:</h2>
            <p>{text.length} Characters & {text.split(" ").filter((ele)=>{return ele.length!==0}).length} Words</p>
            <p hidden={text.length===0}>It will take {0.008 *  text.split(" ").length} Minutes to read </p>
            <h3>Preview Of Entered Text -</h3>
            <p>{text.length>0?text:"Enter text in textbox to preview it here"}</p>

        </div>
    </>
   
    );
}

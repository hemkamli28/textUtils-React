import React, {useState} from "react";
import PropTypes from 'prop-types'



export default function About(props) {
  
    let dark={
        color:"white",
        backgroundColor:"black",
        border:"1px solid white"
    }
    let light={
        color:"black",
        backgroundColor:"white",
       
        
    }


    const [myStyle, setStyle] = useState(
        {
            color:"black",
            backgroundColor:"white",
           
        }
    );
    let toggleHandledark =()=>{
        setStyle(dark);

    }
    let toggleHandlelight=()=>{
        setStyle(light);
    }
  return (
    <>
    
      <div className="container my-3" style={myStyle}>
        <h1 className="my-3">{props.aboutTitle}</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Analyze the Text</strong>                
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count,Character count etc.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo" style={myStyle}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                  <strong> Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
limit.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree" style={myStyle}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
              </div>
            </div>
          </div>
        </div>
        
            <div className="container my-4">
                 <button type="button" onClick={toggleHandlelight} className="btn btn-warning my-1 mx-4"> Light Mode </button>
                 <button type="button" onClick={toggleHandledark} className="btn btn-warning my-1"> Dark Mode </button>

            </div>

      </div>
    </>
  );
}


About.propsTypes = {
    aboutTitle : PropTypes.string.isRequired
}

About.defaultProps = {
     aboutTitle : "About Us"
} 
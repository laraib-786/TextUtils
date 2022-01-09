import React, {useState} from 'react'




export default function TextForm(props) {

    const[text,updateText]=useState("Enter the text here....");
    const convertUppercase=()=>{
        console.log(text);
        let newText=text.toUpperCase();
        updateText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("changed");
        updateText(event.target.value);
    }

    const convertLowercase=()=>{
        let newText=text.toLowerCase();
        updateText(newText);
    }



    return (
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="my-box" rows="8"></textarea>
                
            </div>
            <button className="btn btn-primary mx-1" onClick={convertUppercase}>Convert into uppercase</button>
            <button className="btn btn-primary mx-1"  onClick={convertLowercase}>Convert into lowercase</button>
        </div>
        <div className="container">
            <h3>Text summary</h3>
            <p>words: {text.split(" ").length} | characters: {text.length}</p>
            <p>Read time: {Math.round(0.008 * text.split(" ").length * 1000)/1000 } mins</p>
            <p>Preview</p>
            <p>{text}</p>
        </div>

        </>
        
    )
}

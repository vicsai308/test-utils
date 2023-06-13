import React, {useState} from 'react'

export default function Textbox(props) {

const[text,setText]=useState("");
const[boldt,setboldt]=useState(false);

const storeText = (event)=>{
    setText(event.target.value);
};

const toUppercase = ()=>{
    let upperText = text.toUpperCase();
    setText(upperText);
    // alert(text);
    props.showAlert("Converted text to uppercase!","success")
};

const toLowercase = ()=>{
  let lowerText = text.toLowerCase();
  setText(lowerText);
  // alert(text);
  props.showAlert("Converted text to lowercase!","success")
};

const pascalText = ()=>{
  let parray = [];
  text.split(" ").forEach(element => {
  parray.push(element[0].toUpperCase()+element.slice(1));
  });
  setText(parray.join(' ').toString());
  props.showAlert("Converted text to Pascalcase!","success")
};

const clearText = ()=>{
  setText("");
  props.showAlert("Cleared textbox","warning")
 };

const boldText = ()=>{
  if(boldt===false){
    setboldt(true);
    props.showAlert("Font bold enabled","success")
  } else {
    setboldt(false);
    props.showAlert("Font bold disabled","success") 
  }
 };


  return (
<>
    <div className="container">
    <h2 htmlFor="exampleFormControlTextarea1" className={`text-${props.mode === "light" ? 'dark' : 'light' }`}>{props.content}</h2>
    <textarea className="form-control mb-3" style={{backgroundColor: props.mode === "light" ? "white":"#7b90a633", color: props.mode === "light" ? "black":"white"}} value={text} onChange={storeText} placeholder="Enter text here..." id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className="btn btn-primary" onClick={toUppercase}>Turn to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={toLowercase}>Turn to lowercase</button>
    <button className="btn btn-primary mr-2" onClick={pascalText}>Turn to pascalcase</button>
    <button className="btn btn-primary mr-2" onClick={clearText}>Clear text</button>
    <button className="btn btn-primary mr-2" onClick={boldText}>Bold text</button>
    </div>

    <div className="container my-3">
      <h2 className={`text-${props.mode === "light" ? 'dark' : 'light' }`}>Text summary</h2>
      <p className={`text-${props.mode === "light" ? 'dark' : 'light' }`}>{text.split(" ").length-1} words and {text.length} characters.</p>
      <p className={`text-${props.mode === "light" ? 'dark' : 'light' }`}>{0.008 * text.split(" ").length} minutes to read</p>
      <h2 className={`text-${props.mode === "light" ? 'dark' : 'light' }`}>Preview</h2>
      <p className={`text-${props.mode === "light" ? 'dark' : 'light' }`} style={{fontWeight: boldt ? 'bold':' '}} >{text.length > 0? text : "Enter a text in above box to view the preview..."}</p>
    </div>
</>
  )
}

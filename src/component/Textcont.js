import React, {useState} from 'react';

import PropTypes from 'prop-types';



export default function Textcont(props) {
  // uppercase function
  const clickfunc =()=>{
    let newtext=text.toUpperCase();
    settext(newtext);
     props.showAlert("Converted to uppercase","success");

  }
  // lowercase function
  const clicklfunc =()=>{
    let newtext=text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to Lowercase","success");

  }
  // clear function
  const clickcfunc =()=>{
    let newtext=('');
    settext(newtext);
    props.showAlert("Clear the text succesfully","success");

  }
  // Setence case
  const clicksfunc =()=>{
    let newtext=text.charAt(0).toUpperCase()+text.substring(1,text.length).toLowerCase();
    settext(newtext);
    props.showAlert("Opertaion completed","success");
  }
  //alertnating case
  const clickafunc =()=>{
    let str=text;
    const arr=str.split(" ");
    for(var i=0;i<arr.length;i++){
      arr[i]=arr[i].charAt(0).toUpperCase()+ arr[i].slice(1).toLowerCase();

    } const str2=arr.join(" ");
   settext(str2);
   props.showAlert("opeartion complete","success");
  }
  //  text copy function
  const clickcopyfunc=()=>{
let newtext=document.getElementById("mybox");
newtext.select();
navigator.clipboard.writeText(newtext.value);
props.showAlert("Copied!","success");
 }
// remove Function
const clickremovefunc=()=>{
 let newtext=text.split(/[ ]+/);
 settext(newtext.join(" "));
 props.showAlert("opeartion complete","success");
  
}
  //strikethrough function
//   const clickstrikefunc=(event)=>{
//     let newtext=text;
//  if(event.target.style.textDecoration){
//  let newtext= event.target.style.removeProperty('text-decoration');
//  }else{
//  let newtext=event.target.style.setProperty('text-decoration','line-through');
//  }
//  settext(newtext);
//  }
   
  const handleonchange =(event)=>{
    // console.log("on chnage");
    settext(event.target.value);
  }
  const [text, settext]=useState('');
  const [btntext,setbtntext]=useState("Dark mode");
  const[mystyle,setmystyle]=useState({
    
      color:'black',
      backgroundColor:'white',
    border: 'solid 7px blue',

   })
   const toggleth=()=>{
  if(mystyle.color === 'black'){
    setmystyle({
        color:'white',
      backgroundColor:'black',
    border: 'solid 7px blue',

    })
     setbtntext("Light Mode");
}
else{
    setmystyle({
        color:'black',
      backgroundColor:'white',
    border: 'solid 2px blue',
});
setbtntext("Black mode");
}
   }

  return (
    <>
    <div className='container' >
         <h1>{props.heading}</h1>
    <textarea placeholder="Enter your text here" style={mystyle} className="form-control" id="mybox" onChange={handleonchange} rows="8"  value={text}></textarea>
    <button className={`btn btn-${props.greenmode==='light'?'primary':'success'} my-3 `} onClick={clickfunc}>Convert to Uppercase</button>
    <button className={`btn btn-${props.greenmode==='light'?'primary':'success'} my-3 mx-1 `} onClick={clicklfunc}>Convert to Lowercase</button>
    <button className={`btn btn-${props.greenmode==='light'?'primary':'success'} my-3 mx-1 `} onClick={clickcfunc}>clear</button>
    <button className={`btn btn-${props.greenmode==='light'?'primary':'success'} my-3  mx-1`} onClick={clicksfunc}>Sentence case</button>
    <button className={`btn btn-${props.greenmode==='light'?'primary':'success'} my-3  mx-1`} onClick={clickafunc}>Capitalized Case</button>
    <button className={`btn btn-${props.greenmode==='light'?'primary':'success'} my-3 mx-1 `} onClick={clickcopyfunc}>Copy Text</button>
    <button className={`btn btn-${props.greenmode==='light'?'primary':'success'} my-3 mx-1 `} onClick={clickremovefunc}>Remove extra spaces</button> 
    <button type="button" onClick={toggleth} className={`btn btn-${props.greenmode==='light'?'primary':'success'} my-3 `}>{btntext}</button>
    <p>{text.length} total character and {(text.split(" ").length-1)} words </p>
    <p>Total time for reading :- {0.008 * ((text.split(" ").length)-1)}minute</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter text to preview here"}</p>
   
   
    </div>
    
    </>
  );
}
Textcont.proptype={
  heading: PropTypes.string,
}
Textcont.defaultProps={
 heading : 'set here  heading',
}
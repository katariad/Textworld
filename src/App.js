
import Navbar from './component/Navbar';
import Textcont from './component/Textcont';
import Aboutus from './component/Aboutus';
import './App.css';
import Alert from './component/Alert';
import { useState } from 'react';
import Footer from './component/Footer';
import React from 'react';

function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const[greenmode,setgreenmode]=useState('light');
  const togggreenmode=()=>{
    if(greenmode==='light'){
      setgreenmode('dark');
      document.body.style.backgroundColor='rgb(1 35 14)';
      document.body.style.color='white';
    
       showAlert('Dark Mode enable is succesfull','success');
     }
     else{
      setgreenmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    
      showAlert('Light Mode enable is succesfull','success'); 
    }
  }
  const showAlert=(message, type)=>{
      setalert({
      msg: message,
      type: type
     })
   setTimeout(() => {
    setalert(null);
   }, 1500);
  }
  const togglemode=()=>{
   if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#031633';
    document.body.style.color='White';

     showAlert('Green Mode enable is succesfull','success');
   }
   else{
    setmode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    
    showAlert('Light Mode enable is succesfull','success'); 
  }}
  return (
   <>
   <Navbar  title="TextWorld" toggleMode={togglemode} mode={mode} togggreenmode={togggreenmode}  greenmode={greenmode} abouttext="About us"/>
 
   <Alert alert={alert}/>
     <Textcont heading="Enter text here to analyze" togggreenmode={togggreenmode} greenmode={greenmode} mode={mode} showAlert={showAlert}/>

      <Aboutus  />
       
      <Footer mode={mode} />
   
   </>
  );
}

export default App;

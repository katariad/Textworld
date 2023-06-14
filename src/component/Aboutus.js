import React, { useState } from 'react'

export default function Aboutus() {
  const [btntext,setbtntext]=useState("Enable Dark mode");
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
    <div className="container" style={mystyle} id="aboutus">
        <h2>About TextWorld</h2>
        <p>Aside from counting words and characters, our online editor can help you improve your word choice and writing style, as well as detect grammar errors and plagiarism. Simply place your mouse in the text box above and begin typing to determine the word count. As you type, erase, and edit them, the amount of characters and words will increase or decrease. You can also copy and paste content from another programme into the above-mentioned web editor. The Auto-Save feature ensures that no changes are lost when editing, even if you leave the site and return later. Now is a good time to bookmark this page.</p>
        <hr />
        <p>Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit. In addition, WordCounter shows you the top 10 keywords and keyword density of the article you're writing. This allows you to know which keywords you use how often and at what percentages. This can prevent you from over-using certain words or word combinations and check for best distribution of keywords in your writing.</p>
        <p>n the Details overview you can see the average speaking and reading time for your text, while Reading Level is an indicator of the education level a person would need in order to understand the words you’re using.<strong>Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.</strong> </p>
      
  <button type="button" onClick={toggleth} className='btn btn-primary mx-4 my-3'>{btntext}</button>
</div>
    </>
  )
}

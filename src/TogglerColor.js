import React, { useState } from "react";

function TogglerColler() {

  const [backgroundColor,setBackgroundColor] = useState('white')
  const [TextColor,setTextColor] = useState('#1b1b1b')
  const [buttonStyle,setButtonStyle] = useState('white')
  const [text,settext] = useState("Black")

  const handleChange = ()=>{
setBackgroundColor((backgroundColor=== "white"? '#1b1b1b' : "white"))
setTextColor((TextColor === "#1b1b1b" ? '#ffa31a': '#1b1b1b'))
setButtonStyle((backgroundColor === "white" ? '#1b1b1b' : "white" ))
settext((text === "White" ? "Black" : "White"))
  }
  return (
    <>
      <section style={{backgroundColor,color: TextColor}} className="w-100 d-flex align-items-center justify-content-center ">
        <div >
        <button onClick={handleChange} style={{buttonStyle,color:TextColor,border: `2px  solid ${TextColor}`}} className="btn "> {text} Theme</button>
    
      <section className="content">
        <h1>Welcome to <br/> Real World</h1>
      </section>
      </div>
      </section>
    </>
  );
}

export default TogglerColler;

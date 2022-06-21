import React, { useState} from "react"


function LoginButton() {

  function confirmHandler(){
console.log("Clicked")
  }

  function abortHandler(){
    console.log("Clicked")

  }

 return (
   <div className="card">
     <h2>Login-Modal</h2>
     <div className="actions">
       <div className = "btn" onClick={confirmHandler}>Confirm</div>   {/* onClick ist react und in JS gibts diese property nicht inclick erwartet eine function oder den VErweis auf eine andere function */}
       <div className = "btn"onClick={abortHandler}>Abort</div>  {/** die funktion abortHandler darf hier noch nicht ausgeführt werden mit (), sondern nur gepointet... sonst wird sie ja sofort ausgeführt */}
     </div>
   </div>
 )

}

export default LoginButton
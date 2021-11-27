/*
 * Starter file 
 */

//the input text box to be encrypted
let inputText = null;

//the drop down to select cypher mode
let cypherType = null;
let shiftAmount = null;

//all caps button
let allCaps = null;

//buttons
let encryptButt = null;
let resetButt = null;

//result holder and text
let resultArea = null;
let result = null;

(function() {
  "use strict";

   // The starting point in our program, setting up a listener
   // for the "load" event on the window, signalling the HTML DOM has been constructed
   // on the page. When this event occurs, the attached function (init) will be called.

  window.addEventListener("load", init);

   // TODO: Write a function comment using JSDoc.

  function init() {
    console.log("Window loaded!");
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    inputText = document.getElementById('input-text');
    cypherType = document.getElementById('cipher-type');
    shiftAmount = document.getElementById('shift-amount');
    allCaps = document.getElementById('all-caps');
    encryptButt = document.getElementById('encrypt-it');
    resetButt = document.getElementById('reset');
    resultArea = document.getElementById('result-area');
    result = document.getElementById('output');

    encryptButt.onclick = function() {
      handleClick();
    }
    resetButt.onclick = function() {
      reset();
    }
  }

  function handleClick()
  {
    console.log("Button clicked!");
    let amnt = shiftAmount.value;
    if(amnt < 0)
      amnt *= -1;
    let str = inputText.value;
    let resultStr = "";
    
    for(let i = 0; i < str.length; i++)
    {
      let upper = false;
      if(str[i] >= 'A' && str[i] <= 'Z')
        upper = true;
      if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z'))
      {
        if(cypherType.value === 'shift')
        {
          let charcode = str[i].charCodeAt() + amnt % 26;
          charcode = upper ? wrapChar(charcode, 'Z', 'A') : wrapChar(charcode, 'z', 'a');
          resultStr += String.fromCharCode(charcode);
        }
        else if(cypherType.value === 'random')
        {
          let charcode = 0;
          charcode = upper ? randChar(charcode, 'A') : randChar(charcode, 'a');
          resultStr += String.fromCharCode(charcode);
        }
      }
      else
      {
        resultStr += str[i];
      }
    }
    result.innerHTML = resultStr;
  }

  function randChar(check, start)
  {
    check = start.charCodeAt() + Math.floor((Math.random() * 26) + 0);
    return check;
  }

  //wraps the char if it goes over the lim char
  function wrapChar(check, lim, beg)
  {
    if(check > lim.charCodeAt())
    {
      check = (check - lim.charCodeAt() - 1) + beg.charCodeAt(); 
    }
    return check;
  }

  function reset()
  {
    console.log('reset()');
  }
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();

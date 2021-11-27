/**
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */

/**
//example of async function from slides
async function makeRequest() {
  try {
    let res = await fetch(BASE_URL + "?query=params");
    await checkStatus(res);
    res = await res.json();
    //res = await res.text();
    processData(res);
  } catch(err) {
    handleError(err);
  }
}
 */

let puppyButton = null;
let kittyButton = null;
let pictures = null;
const PETS_URL = "https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php";
let petValue = "";

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * TODO: What do we need to initialize?
   */
  function init() {
    puppyButton = id("puppy-butt");
    puppyButton.onclick = function() {
      puppyPressed();
    }
    kittyButton = id("kitty-butt");
    kittyButton.onclick = function() {
      kittyPressed();
    }
    pictures = id("pictures");
  }

  /**
   * TODO: Fetch data from the CSE 154 ajax pets api!
   */
  async function makeRequest() {
    // TODO
    let res = null;
    try 
    {
      res = await fetch(PETS_URL + petValue);
      await checkStatus(res);
      res = await res.text();
      processData(res);
    }
    catch(err)
    {
      handleError(err);
    }
  }

  /**
   * TODO: Implement any other functions you need
   */

  function kittyPressed()
  {
    setPetValue("?animal=kitty");
    makeRequest();
  }

  function puppyPressed() 
  {
    setPetValue("?animal=puppy");
    makeRequest();
  }

  function setPetValue(petVal)
  {
    petValue = petVal;
  }

  function processData(res)
  {
    removeAllChildNodes(pictures);
    buildImages(res, ".jpg");
  }

  function buildImages(srcs)
  {
    let srcArr = srcs.split(".jpg");
    
    for(let i = 0; i < srcArr.length - 1; i++)
    {
      let node = document.createElement("IMG");
      node.setAttribute("src", srcArr[i] + ".jpg");
      node.setAttribute("alt", "srcArr[" + i.toString() + "] cannot be found: " + srcArr[i]);
      pictures.appendChild(node);
    }
    
    return parent;
  }
  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  async function handleError(err)
  {
    throw new Error(await err);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  function removeAllChildNodes(parent) 
  {
    while (parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
  }
  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();

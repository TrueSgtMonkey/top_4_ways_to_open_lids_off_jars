//setting up variables that will refer to html items
let bigButton = null;
let mooButton = null;
let textBox = null;
let fancyButton = null;
let boringButton = null;
let changeButton = null;
let inputNum = null;
let radioResetter = null;

/* need this onload function to make sure the DOM is ready before looking for
the element */
window.onload = function()
{
    bigButton = document.getElementById('bigbutton');
    textBox = document.getElementById('userText');
    fancyButton = document.getElementById('fancyRadio');
    boringButton = document.getElementById('boringRadio');
    mooButton = document.getElementById('upperCase');
    changeButton = document.getElementById('changeButton');
    inputNum = document.getElementById('biggerNum');
    radioResetter = document.getElementById('radRes');
    bigButton.onclick = function()
    {
        alert("Hello, world!");
        increaseFontSize(2);
    }
    mooButton.onclick = function()
    {
        setMoo();
    }
    changeButton.onclick = function()
    {
        addSize();
    }
    fancyButton.onchange = function()
    {
        makeFancy();
    }
    boringButton.onchange = function()
    {
        makeBoring();
    }
    radioResetter.onclick = function()
    {
        resetRadios();
    }
}

function addSize()
{
    if(textBox != null)
    {
        console.log("ass");
        increaseFontSize(parseFloat(inputNum.value));
    }
    else
    {
        console.log('textBox is null!');
    }
}

function increaseFontSize(val)
{
    if(textBox != null)
    {
        let style = window.getComputedStyle(textBox, null).getPropertyValue('font-size');
        let fontSize = parseFloat(style); 
        textBox.style.fontSize = (fontSize + val) + 'px';
    }  
    else
    {
        console.log("textBox is null!");
    }
}

function setMoo()
{
    if(textBox != null)
    {
        textBox.value = textBox.value.toUpperCase();
        let val = textBox.value;
        let arr = val.split('.');
        textBox.value = arr.join('-Moo');
    }
    else
    {
        console.log("textBox is null!");
    }
}

function makeFancy()
{
    radioChange(fancyButton);
    if(textBox != null)
    {
        textBox.style.fontWeight = "bold";
        textBox.style.color = "blue";
        textBox.style.textDecoration = "underline";
    }
    else
    {
        console.log("textBox is null!");
    }
}

function radioChange(button)
{
    alert('onchange called for ' + button.name);
}

function makeBoring()
{
    radioChange(boringButton);
    if(textBox != null)
    {
        textBox.style.fontWeight = "normal";
        textBox.style.color = "black";
        textBox.style.textDecoration = "none";
    }
    else
    {
        console.log("textBox is null!");
    }
}

function resetRadios()
{
    if(boringButton != null && fancyButton != null)
    {
        boringButton.checked = false;
        fancyButton.checked = false;
    }
    else
    {
        console.log('boring button is ' + boringButton + ' and fancy button is ' + fancyButton)
    }
}


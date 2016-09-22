/*
test
*/

var myHeading=document.querySelector("h1");
// myHeading.innerHTML="hello world!";

var iceCream='chocolate'
if (iceCream==='chocolate') {
	// alert('yay,i love chocolate ice cream');
}else{
	// alert('awww ,but chocolate is my favorite...');
}

function multiply(num1,num2){
	var result=num1*num2;
	return result;
}

document.querySelector('html').onclick=function(){
	// alert('ouch stop poking me!');
}

var myImage=document.querySelector('img');

myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if (mySrc==='images/test-image.png') {
		myImage.setAttribute('src','images/test2.png')
	}else{
		myImage.setAttribute('src','images/test-image.png')
	}
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName(){
	var myName=prompt('Please enter your name');
	localStorage.setItem('name',myName);
	myHeading.innerHTML='Mozilla is cool,'+ myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
}else{
	var storedName=localStorage.getItem('name');
	myHeading.innerHTML='Mozilla is cool,'+ storedName;
}

myButton.onclick=function(){
	setUserName();
}

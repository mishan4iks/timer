var Two_min=1;
var Two_sec=120;
var one_min=0;
var sixty_sec=60;
var thirty=30;
var form_timer=document.querySelector(".container_check");
var timer=document.querySelector(".container_timer");
var timer2=document.querySelector(".container_timer2");
var timer3=document.querySelector(".container_timer3");
var two=document.getElementById("inp_twomin");
var one=document.getElementById("inp_onemin");
var three=document.getElementById("inp_thirtysec");
function thirtySec(){
	if (three.checked) {
		form_timer.style.display="none";
		timer3.style.display="block";
	}
	else {
		timer3.style.display="none";
	}
	if (getComputedStyle(timer3).display == 'none') {
	clearInterval(thirty_func);
}else{	
setInterval (thirty_func,1000);
}
}

function checkTwo(){
	if (two.checked) {
		form_timer.style.display="none";
		timer.style.display="block";
	}
	else {
		timer.style.display="none";
	}
	if (getComputedStyle(timer).display == 'none') {
	clearInterval(twoMin);
	clearInterval(twoSec);
}else{
	setInterval(twoMin,60000);	
setInterval (twoSec,1000);
}
}
function checkOne(){
	if (one.checked) {
		form_timer.style.display="none";
		timer2.style.display="block";
	}
	else {
		timer2.style.display="none";
	}
	if (getComputedStyle(timer2).display == 'none') {
	clearInterval(oneMin);
	clearInterval(oneSec);
}else{
setInterval(oneMin,60000);	
setInterval (oneSec,1000);
}
}
function stop(){
	var lastId = setInterval ( function() {}, 10000 );
  for ( var i = 1; i <= lastId; i++ ) {
     clearInterval ( i );
  }

}
function start(){
	setInterval (thirty_func,1000);
}
function start1(){
setInterval(oneMin,60000);	
setInterval (oneSec,1000);
}
function start2(){
	setInterval(twoMin,60000);	
setInterval (twoSec,1000);
}
function thirty_func(){
	var s=document.getElementById("second2");
	var audio=document.getElementById("audio");
	if (thirty<=0) {
		clearInterval();
		audio.src="audio/audi.mp3";
		audio.autoplay=true;


	}else{
		s.innerHTML=thirty--;

	}
	if (thirty<10) {
		s.innerHTML="0"+thirty;
	}
	else{
		s.innerHTML=""+thirty;	
	}
}
function oneMin(){
	var m=document.getElementById("minute1");
	var audio=document.getElementById("audio");
	if (one_min<=0) {
		clearInterval();
		audio.src="audio/audi.mp3";
		m.innerHTML="0"+one_min;
		


	}else{
		m.innerHTML=one_min--;
		m.innerHTML=""+one_min;
		

	}
}
function oneSec(){
	var s=document.getElementById("second1");
	var audio=document.getElementById("audio");
	if (sixty_sec<=0) {
		clearInterval();
		audio.src="audio/audi.mp3";
		audio.autoplay=true;


	}else{
		s.innerHTML=sixty_sec--;

	}
	if (sixty_sec<10) {
		s.innerHTML="0"+sixty_sec;
	}
	else{
		s.innerHTML=""+sixty_sec;	
	}
}
function twoMin(){
	var m=document.getElementById("minute");
	var audio=document.getElementById("audio");
	if (Two_min<=0) {
		clearInterval();
		audio.src="audio/audi.mp3";


	}else{
		m.innerHTML=Two_min--;
	}
	if (Two_min>=0) {
		m.innerHTML="0"+Two_min;
	}else{
		m.innerHTML=""+Two_min;
	}
}
function twoSec(){
	var s=document.getElementById("second");
	var audio=document.getElementById("audio");
	if (Two_sec<0) {
		clearInterval();
		audio.src="audio/audi.mp3";
		audio.autoplay=true;
	}
	else{
		s.innerHTML=Two_sec--;
	}

}
function restart(){
  location.reload();
}	

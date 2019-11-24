var but = document.getElementById('but');
var but1 = document.getElementById('but1');
var big = document.getElementsByClassName('big')[0];
var big1 = document.getElementsByClassName('big1')[0];
var min = document.getElementsByClassName('min')[0];
var min1 = document.getElementsByClassName('min1')[0];
but1.onclick = function(){
	big.setAttribute('class','no');
	min.setAttribute('class','no');
	big1.setAttribute('class','bigyes');
	min1.setAttribute('class','yes1');
	but.style.background = '#fff';
	but1.style.background = 'linear-gradient(to right, rgb(173,11,143), rgb(255,72,154))';
}
but.onclick = function(){
	big.setAttribute('class','yes');
	min.setAttribute('class','yes1');
	big1.setAttribute('class','no');
	min1.setAttribute('class','no');
	but1.style.background = '#fff';
	but.style.background = 'linear-gradient(to right, rgb(173,11,143), rgb(255,72,154))';
}
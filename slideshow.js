var images = new Array();
images[0]="https://www.google.co.in/search?q=background+images&espv=2&biw=1677&bih=824&source=lnms&tbm=isch&sa=X&ved=0CAYQ_AUoAWoVChMIspqq04XiyAIVxR-UCh0WmA6f#tbm=isch&q=background+images+flowers+white&imgrc=ZJTm3B2C3ZdDXM%3A";
var speed = 3000;

var slideShow = function(i){
	document.getElementById.body.background= 'url("'+images[i]+'")';
	i++;
	if(i>images.legth){
		setTimeout('slideShow('+i+')',speed);
	}
}
slideShow(0);

console.log("loaded");
// var box= document.querySelector('#box');


// document.addEventListener('keypress',function(){
// 	console.log(event.key);
// 	var boxRect= box.getBoundingClientRect();
// 	if (event.key=='d' && (boxRect.x + boxRect.width <window.innerWidth)){

// 		box.style.left=(boxRect.x + 20) + 'px';

// 	}

// 	if (event.key=='s' && (boxRect.y + boxRect.height <window.innerHeight)){
// 		box.style.top=(boxRect.y +20) + 'px';

// 	}
// 	if (event.key=='w' && (boxRect.top!=0)){
// 		box.style.top=(boxRect.y -20) + 'px';

// 	}
// 	if (event.key=='a' && (boxRect.left!=0)){
// 		box.style.left=(boxRect.x-20) + 'px';

// 	}


// });

var box= document.querySelector('#box');



function moveBox(){

	function randomGenerator(min, max){
	return Math.floor((Math.random()*(max-min))+min);
	}
	var movement;
	box.addEventListener('mouseover', function(){
		// let mouseX=event.clientX;
		// let mouseY=event.clientY;
		clearInterval(movement);
		let boxX=box.getBoundingClientRect().x;
		let boxY=box.getBoundingClientRect().y;



		let newX= randomGenerator(0, window.innerWidth);
		let newY= randomGenerator(0, window.innerHeight);

		let moveX=1;
		let moveY=1;

		if (newX<boxX){
			moveX = -1;
		}
		if (newY<boxY){
			moveY = -1;
		}

			movement= setInterval(function(){
			boxX+= moveX;
			boxY+= moveY;
			box.style.left=boxX+ 'px';
			box.style.top= boxY+ 'px';

		},7);



		// box.style.left= newX + 'px';
		// box.style.top= newY + 'px';
	});
}

moveBox();

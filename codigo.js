/* Valores númericos de teclas en Js

  escape 	27 
  left arrow 	37
  up arrow 	38
  right arrow 	39
  down arrow 	40  
  space 32 
  
*/
/*
*Caida vertical
*/

let LiniaVertical = document.querySelector('.Col1-LineaContendor');
let Te = document.querySelector('.Col3-TContendor1');
let Y = 0;
function movimiento(){
	if(Y < 500){
		Y = Y+ 5;
		LiniaVertical.style.top = Y + 'px';
		Te.style.top = Y + 'px';
		setTimeout(movimiento, 250);
	}
}
setTimeout(movimiento,1000);




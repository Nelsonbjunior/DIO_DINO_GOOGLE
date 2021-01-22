const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump(){
	if(dino.classList != "jump"){
		dino.classList.add("jump");

		setTimeout(function(){
		dino.classList.remove("jump");
	},300);
  }
}
let isAlive = setInterval(function(){
	// pega posição atual do Dino em Y
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
	
	// pega posição atual do cacto em X
	let cactusLeft = parseInt(
		window.getComputedStyle(cactus).getPropertyValue("left")
	);

	// Dectecção de colisão
	if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140)
	{
		alert("Game Over");
		//console.log("collision");
	}

},10);
document.addEventListener("keydown", function(event){
jump();
});

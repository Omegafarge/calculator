function changeDisplay(num){
	
	let element = document.getElementById("Display")
	element.innerHTML += num
	
}

function equals(){
	
	let element = document.getElementById("Display")
	let equation = element.innerHTML
	
	element.innerHTML = ""
	
	let answer = eval(equation)
	
	changeDisplay(answer)
}

function clear_display(){

	let element = document.getElementById("Display")
	element.innerHTML = ""
	
}
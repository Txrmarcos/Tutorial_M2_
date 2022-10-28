var v
var g = 10
//let resultados = document.getElementById("0")


function hmax() {
	let input = document.getElementById("1")
    let resultado = input.value / g
	let resultado2 = (input.value **2) /(g*2)
	let resultados = document.getElementById("0")

	console.log(resultado)
	console.log(resultado2)

	resultados.innerHTML += "<p>" +  `O Tempo total de Subida é ${resultado}` + "<br />" + `A altura maxima do objeto é ${resultado2}` + "</p>"
	return `(${resultado}, ${resultado2})`
};




function eq2() {
	let a = document.getElementById("3")
	let b = document.getElementById("4")
	let c = document.getElementById("5")
	let resultados = document.getElementById("00")

	let det = (-b.value) ** 2 - 4 * a.value * c.value
    let xv = (-b.value) / (2 * a.value)
    let yv = -(det / (4 * a.value))

    let resultado = `(${xv}, ${yv})`

	resultados.innerHTML += "<p>" + `Xv e o Yv são =` + resultado + "</p>"
	return resultado
}



function tempf() {
	let c = document.getElementById("7") 
    let resultado = ((9 * c.value) / 5) + 32
	
	return resultado
    
}


function tempc() {
	let f = document.getElementById("7")
    let resultado = ((f.value - 32) * 5) / 9
	
	return resultado
}

function calcTemp(){
	
	let select = document.getElementById("6")
	let resultado 
	let resultados = document.getElementById("100")

	if (select.value == "F" ){
		resultado = tempf()
	} if (select.value=="C"){
		resultado = tempc()
	}
	resultados.innerHTML += "<p>" + resultado + "</p>"
	return resultado	
}

function kwh(){
	let valor = document.getElementById("11").value;
	let unit = document.getElementById("12").value;
	let eletricidadeTotal = valor * unit;
	//let eletri = valor.value*unit.value*porcentagem
	

	if (valor>100){
		eletricidadeTotal = eletricidadeTotal + (eletricidadeTotal * 0.25)
	}if (valor>200){
		eletricidadeTotal = eletricidadeTotal + (eletricidadeTotal * 0.50)

		
		return eletricidadeTotal

	}

	document.getElementById("1001").innerHTML = "<p>" + `a conta de luz desse mês deu: ${eletricidadeTotal} R$` + "</p>"
}

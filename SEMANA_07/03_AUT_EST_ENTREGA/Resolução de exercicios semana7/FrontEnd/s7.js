function calculadora() {
    let tabuada = parseInt(document.getElementById("nTabuada").value)
    let vInicial = parseInt(document.getElementById("vInicial").value)
    let vFinal = parseInt(document.getElementById("vFinal").value)

    let printar = document.getElementById("texto")
    let print =""

    while(vInicial<=vFinal) {
        print += `${tabuada} X ${vInicial} = ${tabuada*vInicial}<br>`;
        vInicial++;
        printar.innerHTML= print
    }
    
    return printar
    
    // printar.innerHTML += "<p>" + `O resultado é : ${tabuada} X ${i} = ${tabuada*i}`  + "<p>"
    

}

function polindromo() {
    let palavra = document.getElementById("pol").value
    let printar = document.getElementById("resultado")
    let nomeNormal = palavra.split("")
    let nomeContrario = nomeNormal.reverse()
    let nomeFinal = nomeContrario.join("")

    if (palavra == nomeFinal) {
        let final = "Seu numero é um Palíndromo" +'</br>'
        printar.innerHTML += final
        return printar
    } else {
        let final = "Seu numero não é um Palíndromo" +'</br>'
        printar.innerHTML += final
        return printar
        
    }

}


function oneTwoThreePi(){
    let max = document.getElementById("max").value
    let printar = document.getElementById("resultado")
    for(i=1; i<=max; i++) {
        printar.innerHTML += i +'</br>';
        if (i % 3 == 0) {
            printar.innerHTML += "PI"+'</br>'
            

        }
    }

}


function calculaAzulejo(){
    let aL = document.getElementById("aL").value
    let Aa = document.getElementById("aA").value
    let Pl = document.getElementById("Pl").value
    let Pa = document.getElementById("Pa").value
    let printar = document.getElementById("resultado")

    let test1 = Pl/aL
    let test2 = Pa/Aa
    let result = (test1*test2)*1.05
    let valorFinal = Math.ceil(result)

    printar.innerHTML += `A quantidade necessaria de Azulejos para a obra será de: ${valorFinal} azulejos.`


    return printar


}


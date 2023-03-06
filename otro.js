function isLeapYear(numero1,numero2){
    if(isNaN(numero1) || isNaN(numero2)){
        alert("el número proporcionado no es válido")
        return
    }
    if(numero1<2001 || numero2>2500){
        alert("el número proporcionado no es válido")
        return
    }
    const bisiestos = []
    
    this.numero1 = Math.floor(numero1)
    this.numero2 = Math.floor(numero2)
    for(let i = numero1;i<=numero2;i++){
        if(i % 4 === 0){
            bisiestos.push(i)
        }
        if(i%100 === 0 && i%400===0){
            bisiestos.push(i)
        }
    }
    return bisiestos
}


const resultado = isLeapYear(2010,2300)
console.log(resultado)
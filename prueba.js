function Jugador(nombre,apellidos) {
    this.nombre = nombre;
    this.apellidos=apellidos;
    this.nivel=1;
    this.puntuacion=1;
    this.sumar= function(){
        this.puntuacion++
        if(this.puntuacion%10===0){
            this.nivel++
        }
    };
    this.restar= function(){
        this.puntuacion--
        if(this.puntuacion === 0){
            this.resetear()
        }
        if(this.puntuacion%10===0){
            this.nivel--
        }
    }
    this.resetear=function(){
        this.puntuacion ==1
        alert("Se ha reseteado")
        return
    }
}

const jugadores = []
const jugador1 = new Jugador("Jaime","Castillo");
console.log(jugador1)
jugador1.sumar()
console.log(jugador1)
const jugador2 = new Jugador("Jairo","Romero")
jugadores.push(jugador1,jugador2)
console.log(jugadores)
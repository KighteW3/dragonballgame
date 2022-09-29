let numeroParticipantesS = prompt("Escriba el número de los participantes");

let numeroParticipantes = parseInt(numeroParticipantesS);
let nombresGuardados = [];

function guardarNombres(){
    for (i=0; i<numeroParticipantes; i++) {
        let nombre = prompt(`Nombre del participante ${i+1}`);
        nombresGuardados.push(nombre);
    }
}

guardarNombres();

alert(`Los participantes serán ${nombresGuardados}`);

class Personajes {
    constructor(name, bPower, race){
        this.name = name;
        this.bPower = bPower;
        this.race = race;
    }
}

function definirRaza() {
    let raza = [];
    let randomNum = getRandomNumber(1,5);
    if (randomNum === 1){
        raza[0] = "Saiyan";
        raza[1] =  1;
        return raza;
    } else if (randomNum === 2){
        raza[0] = "Freezer";
        raza[1] =  2;
        return raza;
    } else if (randomNum === 3){
        raza[0] = "Humano";
        raza[1] =  3;
        return raza;
    } else if (randomNum === 4){
        raza[0] = "Androide"
        raza[1] =  4;
        return raza;
    } else if (randomNum === 5){
        raza[0] = "Majin";
        raza[1] = 5;
        return raza;
    } else {
        definirRaza();
    }
}

class Transformaciones{
    constructor(nombre, raza, multiplicador){
        this.nombre = nombre;
        this.raza = raza;
        this.multiplicador = multiplicador;
    }
}

let superSaiyan = new Transformaciones("SuperSaiyan", "Saiyan", 50);
let superSaiyan2 = new Transformaciones("SuperSaiyan2", "Saiyan", 100);
let superSaiyan3 = new Transformaciones("SuperSaiyan3", "Saiyan", 400);
let freezerForma2 = new Transformaciones("Forma2", "Freezer", 10);
let freezerForma3 = new Transformaciones("Forma3", "Freezer", 20);
let freezerFormaFinal = new Transformaciones("FormaFinal", "Freezer", 40);
let freezerFormaFinalFullpower = new Transformaciones("FormaFinalFullpower", "Freezer", 50);
let kaioKen = new Transformaciones("Kaio-Ken", "Humano", 10);
let superBuu = new Transformaciones("Super-Buu", "Majin", 500);
let buuPuro = new Transformaciones("Buu-Puro", "Majin", 400);

let personajesTotal = [];

for (i=0; i<numeroParticipantes; i++) {
    let personaje = new Personajes(nombresGuardados[i], getRandomNumber(100, 1000000), definirRaza());
    personajesTotal.push(personaje)
}

function definirTransformaciones(personaje){
    seTransforma = getRandomNumber(0,1);
    let raza = personaje.race[1];
    if (seTransforma === 1){
        if (raza === 1) {
            porcentaje = getRandomNumber(1,6);
            if (porcentaje === 1 || porcentaje === 2 || porcentaje === 3) {
                transformaciónResultante = superSaiyan;
                return transformaciónResultante;
            }else if (porcentaje === 4 || porcentaje === 5) {
                transformaciónResultante = superSaiyan2;
                return transformaciónResultante
            }else if (porcentaje === 6) {
                transformaciónResultante = superSaiyan3;
                return transformaciónResultante
            }else {return 0};
        } else if (raza === 2) {
            porcentaje = getRandomNumber(1,10);
            if (porcentaje === 1 || porcentaje === 2 || porcentaje === 3 || porcentaje ===4) {
                transformaciónResultante = freezerForma2;
                return transformaciónResultante;
            }else if (porcentaje === 5 || porcentaje === 6 || porcentaje === 7) {
                transformaciónResultante = freezerForma3;
                return transformaciónResultante
            }else if (porcentaje === 8 || porcentaje === 9) {
                transformaciónResultante = freezerFormaFinal;
                return transformaciónResultante
            }else if (porcentaje === 10) {
                transformaciónResultante = freezerFormaFinalFullpower;
                return transformaciónResultante;
            }else {return 0};
        } else if (raza === 3) {
            transformaciónResultante = kaioKen;
            return transformaciónResultante
        } else if (raza === 4){
            return 0;
        } else if (raza === 5){
            porcentaje = getRandomNumber(1,4);
            if (porcentaje === 1 || porcentaje === 2 || porcentaje === 3) {
                transformaciónResultante = buuPuro;
                return transformaciónResultante;
            }
        }
    } else {
        return 0;
    }
}


function personajesCompletados() {
    for (i=0; i<numeroParticipantes; i++){
        alert(`Tu nombre es ${personajesTotal[i].name}, tu poder base es de ${personajesTotal[i].bPower} unidades y tu raza es ${personajesTotal[i].race[0]}`);
        let transformaciónAdquirida = definirTransformaciones(personajesTotal[i]);
        if (transformaciónAdquirida != 0) {
            personajesTotal[i].bPower = personajesTotal[i].bPower * transformaciónAdquirida.multiplicador;
            alert(`${personajesTotal[i].name} se transforma en ${transformaciónAdquirida.nombre} por lo tanto su poder base se multiplica por ${transformaciónAdquirida.multiplicador} resultando en ${personajesTotal[i].bPower} unidades de poder`);
        } else {
            alert(`No obtienes ninguna transformación, por lo tanto tu poder se estanca en ${personajesTotal[i].bPower} unidades de poder.`);
        }
    }
}

personajesCompletados();

batallaFinal();

function getRandomNumber(min, max) {
    let randomize = Math.random() * (max - min) + min;
    return Math.round(randomize);
}


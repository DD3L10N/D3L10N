//contiene la operacion o resultado parcial
let parcial = "";

//elemento donde se colocan las operacion que se esta realizando
let opeRealizada =document.getElementById("OperacionRealizada");

//elemento donde se coloca el resultado
let txtResul=document.getElementById("txtResultado");

//ultimo operando seleccionado
let operadorSeleccionado="";

//numero ingresado
let numero=""

//para determinar si lo ultimo presionado es un numero o un operando
let ultimoDigitoPresionado="";

function operador(num){
    //concatenar el número
    numero = numero+num;
    //concateno la operacion hasta el momento
    parcial = parcial +num;
    //muestro
    opeRealizada.innerHTML =parcial;

    //controlamos la division por cero
    if(numero=='0' && operadorSeleccionado=='/'){
        limpiar();
        txtResul.innerHTML="Indefinido";
        return;
    }
    //guardo el tipo de tecla precionado por ultima vez
    if(ultimoDigitoPresionado=='operacion'){
        ultimoDigitoPresionado='numero';
    }
}
//detecto cuando se presiona una de operacion
function operacion(oper){
    //guardo la operacionque eligio
    operadorSeleccionado=oper;
    //actualizo el tipo de letra presionada
    ultimoDigitoPresionado="operacion";
    //voya armando la formula matematica
    parcial=parcial+oper;
    numero=0;
    opeRealizada.innerHTML=parcial;
}

//realizo el calculo de la operacion matematica cuando se presiona =
function calculo(){
    //con esto eval evaluo la formula matematica que esta en kformato string
    parcial=eval(parcial);
    txtResul.innerHTML=parcial;
    //vuelvo a convertir en string por si continua la formula 
    parcial=parcial.toString();
    numero="";
    opeRealizada.innerHTML=parcial;
    Borrartxt();
}

function Borrar(){
    operadorSeleccionado="";
    parcial="";
    txtResul.innerHTML="";
    numero="";
    opeRealizada.innerHTML=0;
}

function Borrartxt(){
    operadorSeleccionado="";
    parcial="";
    numero="";
    opeRealizada.innerHTML=0;
}
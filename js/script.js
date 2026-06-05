function calcularCarburante(){

    let reserva =
    Number(document.getElementById("reserva").value);

    let consumo =
    Number(document.getElementById("consumo").value);

    let reabastecimiento =
    Number(document.getElementById("reabastecimiento").value);

    let critico =
    Number(document.getElementById("critico").value);

    if(
        reserva <= 0 ||
        consumo <= 0
    ){
        alert("Ingrese datos válidos");
        return;
    }

    let dias = 0;

    while(reserva > critico){

        reserva =
        reserva + reabastecimiento - consumo;

        dias++;
    }

    document.getElementById("resultadoCarburante").innerHTML =
    `
    <h3>Resultado</h3>
    <p>La reserva llegará al nivel crítico en ${dias} días.</p>
    `;
}

function calcularAlimentos(){

    let producto =
    document.getElementById("producto").value;

    let precioAnterior =
    Number(document.getElementById("precioAnterior").value);

    let precioActual =
    Number(document.getElementById("precioActual").value);

    let cantidad =
    Number(document.getElementById("cantidad").value);

    let gastoAntes =
    precioAnterior * cantidad;

    let gastoActual =
    precioActual * cantidad;

    let diferencia =
    gastoActual - gastoAntes;

    document.getElementById("resultadoAlimentos").innerHTML =
    `
    <h3>${producto}</h3>

    <p>Gasto antes: ${gastoAntes} Bs</p>

    <p>Gasto actual: ${gastoActual} Bs</p>

    <p>Diferencia: ${diferencia} Bs</p>
    `;
}

function calcularTransporte(){

    let normal =
    Number(document.getElementById("distanciaNormal").value);

    let desvio =
    Number(document.getElementById("distanciaDesvio").value);

    let costo =
    Number(document.getElementById("costoKm").value);

    let viajes =
    Number(document.getElementById("viajes").value);

    let costoNormal =
    normal * costo * viajes;

    let costoDesvio =
    desvio * costo * viajes;

    let diferencia =
    costoDesvio - costoNormal;

    document.getElementById("resultadoTransporte").innerHTML =
    `
    <h3>Resultado</h3>

    <p>Costo normal: ${costoNormal} Bs</p>

    <p>Costo con desvío: ${costoDesvio} Bs</p>

    <p>Gasto adicional: ${diferencia} Bs</p>
    `;
}
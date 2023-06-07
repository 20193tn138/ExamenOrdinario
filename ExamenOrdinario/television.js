let television = {
    encendido_apagado: false,
    volumen_mayor: 0,
    volumen_menor: 0,
    canal_mayor: 0,
    canal_menor: 0,
    silenciar : false
};

function encendido_apagado() {
    if (television.encendido_apagado) {
        console.log("La televisión esta apagada");
    } else {
        console.log("La televisión esta encendida");
        console.log("Volumen 3");     
        console.log("Canal 7");
    }
    
}

function volumen_mayor() {
    if (television.encendido_apagado) {
        console.log("La televisión esta apagada");
    } else {
        if (television.volumen_mayor >= 10) {
            console.log("Volumen al máximo")
        } else {
           let volumenActual =  (television.volumen_mayor+1);
           console.log("Volumen actual " + volumenActual);
        }
    }
}

function volumen_menor() {
    if (television.encendido_apagado) {
        console.log("La televisión esta apagada");
    } else {
        if (television.volumen_mayor <= 1) {
            console.log("Volumen al mínimo")
        } else {
           let volumenActual =  (television.volumen_mayor-1);
           console.log("Volumen actual " + volumenActual);
        }
    }
}

function canal_mayor() {
    if (television.encendido_apagado) {
        console.log("La televisión esta apagada");
    } else {
        if (television.canal_mayor >= 100) {
            console.log("Canal máximo")
        } else {
           let canalActual =  (television.canal_mayor+1);
           console.log("Canal actual " + canalActual);
        }
    }
}

function canal_menor() {
    if (television.encendido_apagado) {
        console.log("La televisión esta apagada");
    } else {
        if (television.canal_mayor <= 1) {
            console.log("Canal mínimo")
        } else {
           let canalActual =  (television.canal_menor-1);
           console.log("Canal actual " + canalActual);
        }
    }
}
let user = 'Santiago';
let password = '1234';
let usuario = prompt('Digite su usuario:');
let clave = prompt('Digite la clave:');

let Copia;
let valorcopia;
let cantidadcopia;
let totalcopias;
let promediocopias;
let diacopias;
let impresion;
let valorImpresion;
let cantidadImpresion;
let totalImpresion;
let promedioImpresion;
let diaImpresion;
let internet; 
let valorInternet;
let cantidadInternet;
let totalInternet;
let promedioInternet;
let diaInternet;

if (user == usuario && password == clave){

    console.log(usuario)

    let opcion = Number(prompt('SERVICIOS: \n 1.Copias \n 2.Impresión \n 3.Internet \n 4.Salir '));

    do {

        switch (opcion) 
        {

            case 1: 

            Copia = Copia + 1;

                valorcopia = Number(prompt("Digite el valor de cada copia:"));
                cantidadcopia = Number(prompt("Digite el numero de copias:"));

                promediocopias = promediocopias + cantidadcopia;

                totalcopias = valorcopia * cantidadcopia;

                let opcionFotocopia = Number(prompt("Seleccione una opcion ( 1. Estudiante - 2. Particular)"));

                switch (opcionFotocopia)
                {

                    case 1 :
                        totalcopias = totalcopias - (totalcopias * 0.05);
                        console.log("El total a pagar es: " + totalcopias);

                        diacopias = diacopias + totalcopias;
                    break;

                    case 2 :
                        console.log("El total a pagar es: " + totalcopias);

                        diacopias = diacopias + totalcopias;
                    break;
                }
            break;

            case 2:

                impresion = impresion + 1;

                valorImpresion = Number(prompt("Digita el valor de cada impresion"));
                cantidadImpresion = Number(prompt("Digita la cantidad de hojas a imprimir "));

                promedioImpresion = promedioImpresion + cantidadImpresion;

                totalImpresion = valorImpresion * cantidadImpresion;

                let opcionImpresion = Number(prompt("Seleccione una opcion ( 1. Estudiante - 2. Particular)"));

                switch (opcionImpresion)
                {

                    case 1:
                        totalImpresion = totalImpresion - (totalImpresion * 0.05)

                        console.log("El total a pagar es: " + totalImpresion);

                        diaImpresion = diaImpresion + totalImpresion;
                    break;

                    case 2 :
                        console.log("El total a pagar es: " + totalImpresion);

                        diaImpresion = diaImpresion + totalImpresion;
                    break;

                }
            break;

            case 3:
            
            internet = internet + 1;

                valorInternet = Number(prompt("Digite el valor de cada hora de internet"));
                cantidadInternet = Number(prompt("Digite la cantidad de horas de internet"));

                promedioInternet = promedioInternet + cantidadInternet;

                totalInternet = valorInternet * cantidadInternet;

                let opcionInternet = Number(prompt("Seleccione una opcion ( 1. Estudiante - 2. Particular"))

                switch (opcionInternet)
                {

                    case 1:
                        totalInternet = totalInternet - (totalInternet * 0.05)

                        console.log("El total a pagar es: " + totalInternet);

                        diaInternet = diaInternet + totalInternet;
                    break;

                    case 2 :
                        console.log("El total a pagar es: " + totalInternet);

                        diaInternet = diaInternet + totalInternet;
                    break;

                }

            break;

            default:
   
            break;
        }
        
        opcion = Number(prompt('SERVICIOS: \n 1.Copias \n 2.Impresión \n 3.Internet \n 4.Salir '));
    }
    while (opcion <= 3)

    promediocopias = promediocopias / Copia;
    console.log("El promedio de las copias es: " + promediocopias);

    console.log("El dinero recogido durante el dia por las copias es: " + diacopias);

    promedioImpresion = promedioImpresion / impresion;
    console.log("El promedio de las impresiones es: " + promedioImpresion);

    console.log("El dinero recogido durante el dia por las impresiones es: " + diaImpresion)

}
else {

    console.log('Usuario o contraseña son icorrectas digitelos de nuevo')
    correo = prompt('Digite su usuario:')
    clave = prompt('Digite la clave:')

    if (user === usuario && password === clave){

        let opcion = Number(prompt('SERVICIOS: \n 1.Copias \n 2.Impresión \n 3.Internet \n 4.Salir '));

        do {

            switch (opcion) 
            {
    
                case 1: 
    
                Copia = Copia + 1;
    
                    valorcopia = Number(prompt("Diguite el valor de cada copia:"));
                    cantidadcopia = Number(prompt("Digite el numero de copias:"));
    
                    promediocopias = promediocopias + cantidadcopia;
    
                    totalcopias = valorcopia * cantidadcopia;
    
                    let opcionFotocopia = Number(prompt("Seleccione una opcion ( 1. Estudiante - 2. Particular)"));
    
                    switch (opcionFotocopia)
                    {
    
                        case 1 :
                            totalcopias = totalcopias - (totalcopias * 0.05);
                            console.log("El total a pagar es: " + totalcopias);
    
                            diacopias = diacopias + totalcopias;
                        break;
    
                        case 2 :
                            console.log("El total a pagar es: " + totalcopias);
    
                            diacopias = diacopias + totalcopias;
                        break;
                    }
                break;
    
                case 2:
    
                    impresion = impresion + 1;
    
                    valorImpresion = Number(prompt("Digita el valor de cada impresion"));
                    cantidadImpresion = Number(prompt("Digita la cantidad de hojas a imprimir"));
    
                    promedioImpresion = promedioImpresion + cantidadImpresion;
    
                    totalImpresion = valorImpresion * cantidadImpresion;
    
                    let opcionImpresion = Number(prompt("Seleccione una opcion ( 1. Estudiante - 2. Particular)"));
    
                    switch (opcionImpresion)
                    {
    
                        case 1:
                            totalImpresion = totalImpresion - (totalImpresion * 0.05)
    
                            console.log("El total a pagar es: " + totalImpresion);
    
                            diaImpresion = diaImpresion + totalImpresion;
                        break;
    
                        case 2 :
                            console.log("El total a pagar es: " + totalImpresion);
    
                            diaImpresion = diaImpresion + totalImpresion;
                        break;
    
                    }
                break;
    
                case 3:
                
                internet = internet + 1;
    
                    valorInternet = Number(prompt("Digite el valor de cada hora de internet"));
                    cantidadInternet = Number(prompt("Digite la cantidad de horas de internet"));
    
                    promedioInternet = promedioInternet + cantidadInternet;
    
                    totalInternet = valorInternet * cantidadInternet;
    
                    let opcionInternet = Number(prompt("Seleccione una opcion ( 1. Estudiante - 2. Particular"))
    
                    switch (opcionInternet)
                    {
    
                        case 1:
                            totalInternet = totalInternet - (totalInternet * 0.05)
    
                            console.log("El total a pagar es: " + totalInternet);
    
                            diaInternet = diaInternet + totalInternet;
                        break;
    
                        case 2 :
                            console.log("El total a pagar es: " + totalInternet);
    
                            diaInternet = diaInternet + totalInternet;
                        break;
    
                    }
    
                break;
    
                default:
                    
                break;
            }

            opcion = Number(prompt('SERVICIOS: \n 1.Copias \n 2.Impresión \n 3.Internet \n 4.Salir '));

        }
        while (opcion <= 3)

        promediocopias = promediocopias / Copia;
        console.log("El promedio de las copias es " + promediocopias);
    
        console.log("El dinero recogido durante el dia por las copias es: " + diacopias);
    
        promedioImpresion = promedioImpresion / impresion;
        console.log("El promedio de las impresiones es: " + promedioImpresion);
    
         console.log("El dinero recogido durante el dia por las impresiones es " + diaImpresion)
        
    }
    else{

        console.log('Usuario o contraseña son icorrectas digitelas de nuevo')
        correo = prompt('Digite su usuario:')
        clave = prompt('Digite la clave:')

        if (user === usuario && password === contraseña){

            let opcion = Number(prompt('SERVICIOS: \n 1.Copias \n 2.Impresión \n 3.Internet \n 4.Salir '));

            do {

                let opcion = Number(prompt('SERVICIOS: \n 1.Copias \n 2.Impresión \n 3.Internet \n 4.Salir '));
                switch (opcion) 
                {
        
                    case 1: 
        
                    Copia = Copia + 1;
        
                        valorcopia = Number(prompt("Digite el valor de cada copia:"));
                        cantidadcopia = Number(prompt("Digite el numero de copias:"));
        
                        promediocopias = promediocopias + cantidadcopia;
        
                        totalcopias = valorcopia * cantidadcopia;
        
                        let opcionFotocopia = Number(prompt("Seleccione una opcion ( 1. Estudiante - 2. Particular)"));
        
                        switch (opcionFotocopia)
                        {
        
                            case 1 :
                                totalcopias = totalcopias - (totalcopias * 0.05);
                                console.log("El total a pagar es: " + totalcopias);
        
                                diacopias = diacopias + totalcopias;
                            break;
        
                            case 2 :
                                console.log("El total a pagar es: " + totalcopias);
        
                                diacopias = diacopias + totalcopias;
                            break;
                        }
                    break;
        
                    case 2:
        
                        impresion = impresion + 1;
        
                        valorImpresion = Number(prompt("Digita el valor de cada impresion"));
                        cantidadImpresion = Number(prompt("Digita la cantidad de hojas a imprimir"));
        
                        promedioImpresion = promedioImpresion + cantidadImpresion;
        
                        totalImpresion = valorImpresion * cantidadImpresion;
        
                        let opcionImpresion = Number(prompt("Seleccione una opcion ( 1. Estudiante - 2. Particular)"));
        
                        switch (opcionImpresion)
                        {
        
                            case 1:
                                totalImpresion = totalImpresion - (totalImpresion * 0.05)
        
                                console.log("El total a pagar es: " + totalImpresion);
        
                                diaImpresion = diaImpresion + totalImpresion;
                            break;
        
                            case 2 :
                                console.log("El total a pagar es: " + totalImpresion);
        
                                diaImpresion = diaImpresion + totalImpresion;
                            break;
        
                        }
                    break;
        
                    case 3:
                    
                    internet = internet + 1;
        
                        valorInternet = Number(prompt("Digite el valor de cada hora de internet"));
                        cantidadInternet = Number(prompt("Digite la cantidad de horas de internet"));
        
                        promedioInternet = promedioInternet + cantidadInternet;
        
                        totalInternet = valorInternet * cantidadInternet;
        
                        let opcionInternet = Number(prompt(" Seleccione una opcion ( 1. Estudiante - 2. Particular "))
        
                        switch (opcionInternet)
                        {
        
                            case 1:
                                totalInternet = totalInternet - (totalInternet * 0.05)
        
                                console.log("El total a pagar es: " + totalInternet);
        
                                diaInternet = diaInternet + totalInternet;
                            break;
        
                            case 2 :
                                console.log("El total a pagar es: " + totalInternet);
        
                                diaInternet = diaInternet + totalInternet;
                            break;
        
                        }
        
                    break;
        
                    default:
                        
                    break;
                }

                opcion = Number(prompt('SERVICIOS: \n 1. Copias \n 2.Impresión \n 3.Internet \n 4.Salir '));

            }
            while (opcion <= 3)

            promediocopias = promediocopias / Copia;
            console.log("El promedio de las copias es: " + promediocopias);
        
            console.log("El dinero recogido durante el dia por las copias es: " + diacopias);
        
            promedioImpresion = promedioImpresion / impresion;
            console.log("El promedio de las impresiones es " + promedioImpresion);
        
            console.log("El dinero recogido durante el dia por las impresiones es " + diaImpresion)

        }
        else{
    
            console.log('error al ingresar')

        }

    }
    
}


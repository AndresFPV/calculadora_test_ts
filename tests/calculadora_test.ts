//Despues tenemos que importar la instancia de clase a testear
import {Calculadora} from "../src/calculadora"

//con esta funcion podemos pasarle 2 parametros
//Primero lo que describa el escenario, segundo la funcion
describe("Prueba de la funcion sumar", ()=> {
    //2 parametros: especifica el TC
    it("suma de 2 enteros positivo", () => {
        //codigo de la prueba
        let resEsperado = 3
        
        let calculadora = new Calculadora()
        let resObtenido = calculadora.sumar(1 , 2)

        //asserts => es un componente(estructura) de LP's
        expect(resEsperado).toEqual(resObtenido)
    })

    it("suma de un cero con un positivo", ()=> {
        let resEsperado = 3
        
        let calculadora = new Calculadora()
        let resObtenido = calculadora.sumar(0 , 3)

        expect(resEsperado).toEqual(resObtenido)
    })

    it("suma de negativos", () =>{
        let resEsperado = -5
        
        let calculadora = new Calculadora()
        let resObtenido = calculadora.sumar(-1 , -4)
        
        expect(resEsperado).toEqual(resObtenido)
    })
})
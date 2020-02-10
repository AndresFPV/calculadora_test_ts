//Despues tenemos que importar la instancia de clase a testear
import {Calculadora} from "../src/calculadora"
import {CalculadoraBinaria,Conversor} from "../src/calculadora_binaria"

//Principio DRY NO se aplica en los Casos de Prueba

//con esta funcion podemos pasarle 2 parametros
//Primero lo que describa el escenario, segundo la funcion
describe("Prueba de la funcion sumar", ()=> {
    let calculadora : Calculadora
    
    beforeEach(() =>{
        //Se ejecuta antes de los TCs    
    })

    beforeAll(() =>{
        //Se ejecuta antes de todos los TCs    
    })

    afterEach(() =>{
        //Se ejecuta después de los TCs
    })

    afterAll(() =>{
        //Se ejecuta después de todos los TCs
    })

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

    //2da Parte del ejercicio
    describe("Calculadora Binaria Funcion Sumar", () => {
        it("TC1: Sumar", () => {
            let sum1 = "10"
            let sum2 = "11"
            let resEsperado = "101"

            //implementando mock
            let conversor = new Conversor()

            //crear mocks de funciones
            spyOn(conversor, "btod").and.callFake((num : string) : string => {
                if (num == "10") return "2"
                else if (num == "11") return "3"
                else return ""
            })

            spyOn(conversor, "dtob").and.callFake((num : string) : string => {
                if (num == "5") return "101"
                else return ""
            })

            //

            let cb = new CalculadoraBinaria(conversor)
            let resObtenido = cb.sumar(sum1,sum2)

            //asserts
            expect(resEsperado).toEqual(resObtenido)
        })
    })
})
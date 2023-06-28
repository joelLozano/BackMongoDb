
const add = (number, number2) => {
    return number+ number2
}

const userMock = {
    nombre: "joel",
    password: "123123"
}

const userMock2 = {
    nombre: "",
    password: "123123"
}

const usuario = ({nombre, password}) => {
    if (!nombre) return "error"
    return "ok"
}

    describe("Pruebas unitarias para el modulo de operaciones ", () => {

        test('Test Function Add', () => {
            expect(add(100, 200)).toStrictEqual(300)
         })

         test('Prueba de usuario ok', () => {
            expect(usuario(userMock)).toBe("ok")
         })

         test('Prueba de usuario no ok', () => {
            expect(usuario(userMock2)).toBe("error")
         })
    })

const fs = require('fs')
const colors = require('colors')

const listarTabla = (base, limite = 10) => {

    console.log('==========================='.green)
    console.log(`===== Tabla de ${base} ====`.green)
    console.log('==========================='.green)

    for (let i = 0; i <= limite; i++) {
        let mul = base * i
        console.log(`${base} * ${i} = ${mul}`.america)
    }

}

const crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un número`.green)
            return
        }

        let data = ''
        for (let i = 0; i <= limite; i++) {
            let mul = base * i
            data += `${base} * ${i} = ${mul}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`Tabla del: ${base} - límite: ${limite}.txt`.green)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
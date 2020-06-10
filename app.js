const { crearArchivo, listarTabla } = require('./multiplicar/multi')

const { argv } = require('./config/yargs')

const colors = require('colors')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log('Listar')
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('Crear')
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.red))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido')
        break;
}

console.log(argv)
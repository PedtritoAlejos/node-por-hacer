const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const opts_crear = {
    descripcion

}
const opts_actualizar = {
    descripcion,
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado la tarea'
    }
}
const opts_eliminar = {
    descripcion
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts_crear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts_actualizar)
    .command('borrar', 'Eliminar  una tarea', opts_eliminar)
    .help()
    .argv;

module.exports = {
    argv
}
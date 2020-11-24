
const mongoose = require('mongoose');

let esquemaReserva = new mongoose.Schema({

    nombre: {
        type:String,
        required :[true,'El nombre es obligatorio.']
    },
    apellido:{
        type:String,
        required:[true, 'El apellido es obligatorio.']
    },
    telefono:{
        type:String,
        required:[true, 'El teléfono es obligatorio.']
    },
    fechaInicio:{
        type:String,
        required: [true,'La fecha de inicio es obligatoria.']
    },
    fechaFinal:{
        type:String,
        required: [true,'La fecha final es obligatoria.']
    }, 
    cantidadPersonas:{
        type:String,
        required: [true, 'La cantidad de personas es obligatoria.']
    },
    tipoPaquete:{
        type:String,
        required:[true, 'El tipo de paquete es obligatorio.']
    }
});

module.exports = mongoose.model('modeloReserva',esquemaReserva);
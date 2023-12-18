const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    PatientID: {
        type: Number,
        required: true

    }
    patientSurname: {
        type: String,
        required: true

    }
    patientOthernames: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Patient', patientSchema)
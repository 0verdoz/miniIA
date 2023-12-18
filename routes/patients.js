const express = require('express')
const router = express.Router()
const Patient = reuire('../models/patient')

//Getting all
router.get('/', async (req, res) => {
try {

}
catch {
    
}
})
//Getting one
router.get('/:PatientID', (req, res) => {
    res.send(req.params.PatientID)
})

//Creating one
router.get('/:Surname', (req, res) => {
    res.send(req.params.Surname)
})

router.get('/:Othernames', (req, res) => {
    res.send(req.params.Othernames)
})
//Updating one
//Deleting one

module.exports = router


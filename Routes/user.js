const express = require('express')
const { register, login } = require('../Controllers/user')
const { registerValidation, validation, loginValidation } = require('../Middleware/Validator')
const isAuth = require("../middleware/isAuth");


const router = express.Router()

router.post('/register', registerValidation(),validation,register)

router.post("/login" , loginValidation(),validation ,login)

router.get("/current", isAuth , (req, res) => {
    res.send(req.user)
})


module.exports= router
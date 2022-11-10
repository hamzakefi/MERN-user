const { check, validationResult } = require("express-validator");


exports.registerValidation = () => [
    check("name" , "name is required!!").not().isEmpty(),
    check("email" , "Enter a valid email").isEmail(),
    check("password" , "Enter a valid password").isLength({min:7})
]


exports.loginValidation = () => [
    check("email" , "Enter a valid email").isEmail(),
    check("password" , "Enter a valid password").isLength({min:7})
]

exports.validation = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    next()
}
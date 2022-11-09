const {body}  = require('express-validator')
exports.validationCheck=[
    body('email','please enter a valid email').isEmail(),
    body('password','password should be 6 caracters with Alpha included!!').isLength(6).isAlphanumeric()
] 
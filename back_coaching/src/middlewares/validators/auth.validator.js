const { body } = require('express-validator');

//validation d'enregistrement 
exports.registerRules = [
    body('login').notEmpty().trim().withMessage('login requis'),
    body('email').isEmail().normalizeEmail().withMessage('email pas correct'),
    body('password').isLength({min:8}).withMessage('mini 8 carac'),
    body('sexe').isIn(['Homme', 'Femme', 'Autre']).withMessage('sexe doit être Homme, Femme ou Autre'),
    body('taille').toInt().isInt({min: 1}).withMessage('taille doit être un nombre entier positif'),
    body('age').notEmpty().trim().withMessage('age requis')
];

//validation de connexion
exports.loginRules = [
    body('email').isEmail(),
    body('password').notEmpty()
]
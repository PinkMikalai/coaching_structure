const { body } = require('express-validator');

exports.poidRules = [
    body('poid').isInt({min: 1}).withMessage('poid doit être un nombre entier positif'),
];

const { validationResult } = require('express-validator');
const authService = require('../services/auth.service');

exports.register = async (req , res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            message: "erreurs lors de creation de compte",
            //revois des erreurs sur forme d un tableau
            data: errors.array()
        })
    }
    try {
        const { login, email, password, sexe, taille, age } = req.body;
        const user = await authService.register({ login, email, password, sexe, taille, age });
        return res.status(201).json({
            success: true,
            message: "compte creer avec succes",
            data: user
        })
    } catch (error){
        console.error('Erreur lors de la création du compte:', error);
        return res.status(500).json({
            success: false,
            message: "erreurs lors de creation de compte",
            data: null
        })
    }
};

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        //stop si jamais payload invalide
        return res.status(400).json({
            success:false,
            errors: errors.array()
        })
    }

    //utiliser notre fonction qui verifie les credential
    const user = await authService.validateCredentials(req.body.email, req.body.password);
    if(!user){
        return res.status(401).json({
            succes: false,
            message: 'indentifiants pas bon',
            data: null
        })
    }

    const token = authService.generateToken(user);
    return res.status(200).json({
        succes:true,
        message:"connexion réussie",
        data: {token}
    })
 
}
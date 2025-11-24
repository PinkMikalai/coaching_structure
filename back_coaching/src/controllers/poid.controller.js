const { validationResult } = require('express-validator');
const { Poid } = require('../models');

//ici je fait l ajout de poid
exports.poid = async (req , res) => {
    console.log("ici je  affiche mon poid");

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            message: "erreurs lors de la saisie du poid",
            data: errors.array()
        })
    }
    //notre logique d ajout de poid
    try {
        const { poid: poidValue } = req.body;
        console.log("User ID:", req.user.id); // Debug
        const newPoid = await Poid.create({ poid: poidValue, user_id: req.user.id });
        console.log("poid sauvegardé avec succès", newPoid);
        return res.status(201).json({
            success: true,
            message: "poid sauvegardé avec succès",
            data: newPoid
        })
    } catch (error) {
        console.error('Erreur lors de la sauvegarde du poid:', error);
        return res.status(500).json({
            success: false,
            message: "erreurs lors de la saisie du poid",
            data: null
        })
    }
}

//ici la logique pour affiche le poid  par id d utilisateur
exports.poidById = async (req, res) => {
    
}
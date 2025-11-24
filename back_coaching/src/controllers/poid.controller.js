const { validationResult } = require('express-validator');
const { Poid } = require('../models');

//ici je fait l ajout de poid
exports.addPoid = async (req , res) => {

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
        const newPoid = await Poid.create({ poid: poidValue, user_id: req.user.id });

        console.log("User ID:", req.user.id); 
        console.log("poid sauvegardé avec succès", newPoid);
        
        return res.status(201).json({
            success: true,
            message: "poid sauvegardé avec succès",
            data: newPoid
        })
    } catch (error) {
        console.error('Erreur lors de la sauvegarde du poid:');
        return res.status(500).json({
            success: false,
            message: "erreurs lors de la saisie du poid",
            data: null
        })
    }
}

//ici la logique pour afficher tous les poids d'un utilisateur
exports.getAllPoidsByUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            message: "erreurs lors de la récupération des poids",
            data: errors.array()
        })
    }
    try {
        const userId = req.user.id;
        const poids = await Poid.findAll({
            where: { user_id: userId },
            order: [['created_at', 'DESC']] // Trier par date de création décroissante (plus récent en premier)
        });
        return res.status(200).json({
            success: true,
            message: "poids récupérés avec succès",
            data: poids
        })
    }
    catch (error) {
        console.error('Erreur lors de la récupération des poids:', error);
        return res.status(500).json({
            success: false,
            message: "erreurs lors de la récupération des poids",
            data: null
        })
    }
}

//ici la logique pour affiche le poid  par id 
exports.poidById = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            message: "erreurs lors de la récupération du poid par id",
            data: errors.array()
        })
    }
    try {
        const { id } = req.params;
        const poid = await Poid.findByPk(id);
        if (!poid) {
            return res.status(404).json({
                success: false,
                message: "poid non trouvé",
                data: null
            })
        }
        return res.status(200).json({
            success: true,
            message: "poid récupéré avec succès",
            data: poid
        })
    }
    catch (error) {
        console.error('Erreur lors de la récupération du poid:', error);
        return res.status(500).json({
            success: false,
            message: "erreurs lors de la récupération du poid",
            data: null
        })
    }
}
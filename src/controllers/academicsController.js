const academicsModel = require('../models/academicsModel');

const getAllAcademics = async (request, response) => {
    const academics = await academicsModel.getAllAcademics();

    return response.status(200).send(academics.rows);
}

const getAcademic = async (request, response) => {
    const { can_id } = request.params;
    const skill = await academicsModel.getAcademic(can_id);

    return response.status(200).send(skill.rows);
}

const createAcademic = async (request, response) => {
    const { can_id } = request.params;
    const createdAcademic = await academicsModel.createAcademic(can_id, request.body);
    return response.status(201).send(createdAcademic.rows);
};

const updateAcademic = async (request, response) => {
    const { can_id, aca_id } = request.params;
    console.log(aca_id);

    const updatedAcademic = await academicsModel.updateAcademic(can_id, aca_id, request.body);
    return response.status(200).send({
        message: "Academic successfully updated.",
        updateAcademic: updatedAcademic.rows
    });
};

const deleteAcademic = async (request, response) => {
    const {can_id, aca_id } = request.params;

    try {
        const deletedAcademic = await academicsModel.deleteAcademic(aca_id);
        return response.status(200).json({
            message: 'Academic successfully deleted.',
            deletedAcademic: deletedAcademic.rows
        })
    } catch (err) {
        return response.status(404).send(err);
    };
};



module.exports = {
    getAllAcademics,
    getAcademic,
    createAcademic,
    deleteAcademic,
    updateAcademic,
};
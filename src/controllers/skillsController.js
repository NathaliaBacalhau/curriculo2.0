const skillsModel = require('../models/skillsModel');

const getAllSkills = async (request, response) => {
    const skills = await skillsModel.getAllSkills();

    return response.status(200).send(skills.rows);
}

const getSkill = async (request, response) => {
    const { can_id } = request.params;
    const skill = await skillsModel.getSkill(can_id);

    return response.status(200).send(skill.rows);
}

const createSkill = async (request, response) => {
    const { can_id } = request.params;
    const createdSkill = await skillsModel.createSkill(can_id, request.body);
    return response.status(201).send(createdSkill.rows);
};

const updateSkill = async (request, response) => {
    const { can_id, ski_id } = request.params;

    const updatedSkill = await skillsModel.updateSkill(can_id, ski_id, request.body);
    return response.status(200).send({
        message: "Skill successfully updated.",
        updateSkill: updatedSkill.rows
    });
};

const deleteSkill = async (request, response) => {
    const {can_id, ski_id } = request.params;

    try {
        const deletedSkill = await skillsModel.deleteSkill(ski_id);
        return response.status(200).json({
            message: 'Skill successfully deleted.',
            deletedSkill: deletedSkill.rows
        })
    } catch (err) {
        return response.status(404).send(err);
    };
};



module.exports = {
    getAllSkills,
    getSkill,
    createSkill,
    deleteSkill,
    updateSkill,
};
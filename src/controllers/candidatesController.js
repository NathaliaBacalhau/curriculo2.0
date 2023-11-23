const candidatesModel = require('../models/candidatesModel');

const getAllCandidates = async (request, response) => {
  const candidates = await candidatesModel.getAllCandidates();

  return response.status(200).send(candidates.rows);
}

const getCandidate = async (request, response) => {
  const { can_id } = request.params;
  const candidate = await candidatesModel.getCandidate(can_id);

  return response.status(200).send(candidate.rows);
}

const createCandidate = async (request, response) => {
  const createdCandidate = await candidatesModel.createCandidate(request.body);
  return response.status(201).send(createdCandidate.rows);
};

const updateCandidate = async (request, response) => {
  const { can_id } = request.params;

  const updatedCandidate = await candidatesModel.updateCandidate(can_id, request.body);
  return response.status(200).send({
    message: "Candidate successfully updated.",
    updateCandidate: updatedCandidate.rows
  });
};

const deleteCandidate = async (request, response) => {
  const { can_id } = request.params;

  try {
    const deletedCandidate = await candidatesModel.deleteCandidate(can_id);
    return response.status(200).json({
      message: 'Candidate successfully deleted.',
      deletedCandidate: deletedCandidate.rows
    })
  } catch (err) {
    return response.status(404).send(err);
  };
};



module.exports = {
  getAllCandidates,
  getCandidate,
  createCandidate,
  deleteCandidate,
  updateCandidate,
};
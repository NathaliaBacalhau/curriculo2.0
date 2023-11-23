const pool = require('./connection');

const getAllCandidates = async () => {
    const query = 'SELECT * FROM can_candidates';
    const candidates = await pool.query(query);
    console.log(candidates)
    return candidates;
}

const getCandidate = async (can_id) => {
    const query = 'SELECT * FROM can_candidates WHERE can_id = ($1)';
    const candidate = await pool.query(query, [can_id]);
    console.log(candidate)
    return candidate;
}

const createCandidate = async (candidate) => {
    const { can_name, can_email } = candidate;
    console.log(`can_name: ${can_name}, can_email: ${can_email}`);

    const query = 'INSERT INTO can_candidates(can_name, can_email) VALUES ($1, $2) RETURNING *';
    const createdCandidate =  await pool.query(query, [can_name, can_email]);

    return createdCandidate;
}

const updateCandidate = async (can_id, candidate) => {
    const { can_name, can_email } = candidate;

    const query = "UPDATE can_candidates SET can_name = ($1), can_email = ($2) WHERE can_id = ($3) RETURNING *";
    const  updatedCandidate  = await pool.query(query,[can_name, can_email, can_id]);

    return updatedCandidate;
}

const deleteCandidate = async (can_id) => {
    const query = "DELETE FROM can_candidates WHERE can_id = ($1) RETURNING *";
    const removedCandidate = await pool.query(query, [can_id]);
    return removedCandidate;
}

module.exports = {
    getAllCandidates,
    getCandidate,
    createCandidate,
    updateCandidate,
    deleteCandidate
}
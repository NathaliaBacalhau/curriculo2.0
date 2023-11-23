const pool = require('./connection');

const getAllAcademics = async () => {
    const query = 'SELECT to_json(res) from (SELECT a.aca_id, a.aca_title, a.aca_degree, a.aca_institution, to_json(c) candidate FROM aca_academics a INNER JOIN can_candidates c on a.can_id = c.can_id) res';
    const academics = await pool.query(query);
    console.log(academics)
    return academics;
}

const getAcademic = async (can_id) => {
    const query = 'SELECT to_json(res) from (SELECT a.aca_id, a.aca_title, a.aca_degree, a.aca_institution, to_json(c) candidate FROM aca_academics a INNER JOIN can_candidates c on a.can_id = c.can_id and a.can_id = ($1)) res ';
    const academic = await pool.query(query, [can_id]);
    console.log(academic)
    return academic;
}

const createAcademic = async (can_id, academic) => {
    const { aca_title, aca_degree, aca_institution } = academic;
    const query = 'INSERT INTO aca_academics(aca_title, aca_degree, aca_institution, can_id) VALUES ($1, $2, $3, $4) RETURNING *';
    const createdAcademic =  await pool.query(query, [aca_title, aca_degree, aca_institution, can_id]);

    return createdAcademic;
}

const updateAcademic = async (can_id, aca_id, academic) => {
    const { aca_title, aca_degree, aca_institution } = academic;
    console.log(academic)
    console.log(can_id)
    console.log(aca_id)

    const query = 'UPDATE aca_academics SET aca_title = ($1), aca_degree = ($2), aca_institution = ($3), can_id = ($4) WHERE aca_id= ($5) RETURNING *';
    const  updatedAcademic  = await pool.query(query, [aca_title, aca_degree, aca_institution, can_id, aca_id]);

    return updatedAcademic;
}

const deleteAcademic = async (aca_id) => {
    const query = 'DELETE FROM aca_academics WHERE aca_id = ($1) RETURNING *';
    const removedAcademic = await pool.query(query, [aca_id]);
    return removedAcademic;
}

module.exports = {
    getAllAcademics,
    getAcademic,
    createAcademic,
    updateAcademic,
    deleteAcademic
}
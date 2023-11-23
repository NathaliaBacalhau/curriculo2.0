const pool = require('./connection');

const getAllSkills = async () => {
    const query = 'SELECT to_json(res) from (SELECT s.ski_id, s.ski_name, s.ski_degree, to_json(c) candidate FROM ski_skills s INNER JOIN can_candidates c on s.can_id = c.can_id) res ';
    const skills = await pool.query(query);
    console.log(skills)
    return skills;
}

const getSkill = async (can_id) => {
    const query = 'SELECT to_json(res) from (SELECT s.ski_id, s.ski_name, s.ski_degree, to_json(c) candidate FROM ski_skills s INNER JOIN can_candidates c on s.can_id = c.can_id and s.can_id = ($1)) res';
    const skill = await pool.query(query, [can_id]);
    console.log(skill)
    return skill;
}

const createSkill = async (can_id, skill) => {
    const { ski_name, ski_degree } = skill;

    const query = 'INSERT INTO ski_skills(ski_name, ski_degree, can_id) VALUES ($1, $2, $3) RETURNING *';
    const createdSkill =  await pool.query(query, [ski_name, ski_degree, can_id]);

    return createdSkill;
}

const updateSkill = async (can_id, ski_id, skill) => {
    const { ski_name, ski_degree } = skill;

    const query = "UPDATE ski_skills SET ski_name = ($1), ski_degree = ($2), can_id = ($3) WHERE ski_id = ($4) RETURNING *";
    const  updatedSkill  = await pool.query(query,[ski_name, ski_degree, can_id, ski_id]);

    return updatedSkill;
}

const deleteSkill = async (ski_id) => {
    const query = "DELETE FROM ski_skills WHERE ski_id = ($1) RETURNING *";
    const removedSkill = await pool.query(query, [ski_id]);
    return removedSkill;
}

module.exports = {
    getAllSkills,
    getSkill,
    createSkill,
    updateSkill,
    deleteSkill
}
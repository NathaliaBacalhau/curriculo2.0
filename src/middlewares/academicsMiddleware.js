
const validateFieldTitle = (request, response, next) => {
    const { body } = request;
    
    if(body.aca_title === undefined){
        return response.status(400).json({message: 'The field aca_title is required.'});
    }
    if(body.aca_title === ''){
        return response.status(400).json({message: 'The field aca_title cannot be empty.'});
    }

    next();
}

const validateFieldDegree = (request, response, next) => {
    const { body } = request;
    
    if(body.aca_degree === undefined){
        return response.status(400).json({message: 'The field aca_degree is required.'});
    }
    if(body.aca_degree === ''){
        return response.status(400).json({message: 'The field aca_degree cannot be empty.'});
    }

    next();
};

const validateFieldInstitution = (request, response, next) => {
    const { body } = request;
    
    if(body.aca_institution === undefined){
        return response.status(400).json({message: 'The field aca_institution is required.'});
    }
    if(body.aca_institution === ''){
        return response.status(400).json({message: 'The field aca_institution cannot be empty.'});
    }

    next();
};

module.exports= {
    validateFieldTitle,
    validateFieldDegree,
    validateFieldInstitution
}
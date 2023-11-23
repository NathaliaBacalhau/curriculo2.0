
const validateFieldName = (request, response, next) => {
    const { body } = request;
    
    if(body.ski_name === undefined){
        return response.status(400).json({message: 'The field ski_name is required.'});
    }
    if(body.ski_name === ''){
        return response.status(400).json({message: 'The field ski_name cannot be empty.'});
    }

    next();
}

const validateFieldDegree = (request, response, next) => {
    const { body } = request;
    
    if(body.ski_degree === undefined){
        return response.status(400).json({message: 'The field ski_degree is required.'});
    }
    if(body.ski_degree === ''){
        return response.status(400).json({message: 'The field ski_degree cannot be empty.'});
    }

    next();
};

module.exports= {
    validateFieldName,
    validateFieldDegree
}
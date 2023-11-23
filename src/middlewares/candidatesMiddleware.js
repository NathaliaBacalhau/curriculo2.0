
const validateFieldNome = (request, response, next) => {
    const { body } = request;
    
    if(body.can_name === undefined){
        return response.status(400).json({message: 'The field can_name is required.'});
    }
    if(body.can_name === ''){
        return response.status(400).json({message: 'The field can_name cannot be empty.'});
    }

    next();
}

const validateFieldEmail = (request, response, next) => {
    const { body } = request;
    
    if(body.can_email === undefined){
        return response.status(400).json({message: 'The field can_email is required.'});
    }
    if(body.can_email === ''){
        return response.status(400).json({message: 'The field can_email cannot be empty.'});
    }

    next();
};

module.exports= {
    validateFieldNome,
    validateFieldEmail
}
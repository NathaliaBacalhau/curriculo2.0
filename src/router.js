const express = require('express');

const router = express.Router();


const candidatesController = require('./controllers/candidatesController');
const candidatesMiddleware = require('./middlewares/candidatesMiddleware');

const skillsController = require('./controllers/skillsController');
const skillsMiddleware = require('./middlewares/skillsMiddleware');

const academicsController = require('./controllers/academicsController');
const academicsMiddleware = require('./middlewares/academicsMiddleware');

router.get('/candidates', candidatesController.getAllCandidates);
router.get('/candidates/:can_id', candidatesController.getCandidate);
router.post('/candidates/:can_id', candidatesMiddleware.validateFieldNome, candidatesMiddleware.validateFieldEmail, candidatesController.createCandidate);
router.delete('/candidates/:can_id/:ski_id', candidatesController.deleteCandidate);
router.put('/candidates/:can_id/:ski_id',
  candidatesMiddleware.validateFieldNome,
  candidatesMiddleware.validateFieldEmail,
  candidatesController.updateCandidate,
);


router.get('/skills', skillsController.getAllSkills);
router.get('/skills/:can_id', skillsController.getSkill);
router.post('/skills/:can_id', skillsMiddleware.validateFieldName, skillsMiddleware.validateFieldDegree, skillsController.createSkill);
router.delete('/skills/:can_id/:ski_id', skillsController.deleteSkill);
router.put('/skills/:can_id/:ski_id',
  skillsMiddleware.validateFieldName,
  skillsMiddleware.validateFieldDegree,
  skillsController.updateSkill,
);

router.get('/academics', academicsController.getAllAcademics);
router.get('/academics/:can_id', academicsController.getAcademic);
router.post('/academics/:can_id', academicsMiddleware.validateFieldTitle, academicsMiddleware.validateFieldDegree, academicsMiddleware.validateFieldInstitution, academicsController.createAcademic);
router.delete('/academics/:can_id/:aca_id', academicsController.deleteAcademic);
router.put('/academics/:can_id/:aca_id',
  academicsMiddleware.validateFieldTitle,
  academicsMiddleware.validateFieldDegree,
  academicsMiddleware.validateFieldInstitution,
  academicsController.updateAcademic,
);


module.exports = router;
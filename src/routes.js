const express = require('express');
const routes = express.Router()



const PanelController = require('./Controllers/PanelController');
const StoreInfoController = require('./Controllers/StoreInfoController');
const QuestionsCovidController = require('./Controllers/CovidController');
const CommunicationQuestionsController = require('./Controllers/CommunicationController.js');
const CultureController = require('./Controllers/CultureController');
const EngagementController = require('./Controllers/EngagementController');
const CustomerExController = require('./Controllers/CustomerExController');
const FrameController = require('./Controllers/FrameController');
const WorkSafetyController = require('./Controllers/WorkSafetyController');
const RoutinesPmBmController = require('./Controllers/RoutinesPmBmController');


routes.get('/panel', PanelController.index)

routes.get('/storeInfo', StoreInfoController.index)
routes.post('/storeInfo', StoreInfoController.create)

routes.get('/questionsCovid', QuestionsCovidController.index)
routes.post('/questionsCovid', QuestionsCovidController.create)

routes.get('/communicationQuestions', CommunicationQuestionsController.index)
routes.post('/communicationQuestions', CommunicationQuestionsController.create)

routes.get('/cultureQuestions', CultureController.index)
routes.post('/cultureQuestions', CultureController.create)

routes.get('/engagementQuestions', EngagementController.index)
routes.post('/engagementQuestions', EngagementController.create)

routes.get('/customerExQuestions', CustomerExController.index)
routes.post('/customerExQuestions', CustomerExController.create)

routes.get('/frameQuestions', FrameController.index)
routes.post('/frameQuestions', FrameController.create)

routes.get('/workSafetyQuestions', WorkSafetyController.index)
routes.post('/workSafetyQuestions', WorkSafetyController.create)

routes.get('/routinesPmBmQuestions', RoutinesPmBmController.index)
routes.post('/routinesPmBmQuestions', RoutinesPmBmController.create)

module.exports = routes
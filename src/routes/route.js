const { Router } = require('express');
const FindRoute = require('../useCases/FindRoute/index');
const CreateFile = require('../useCases/CreateFile/CreateFile');
const routes = Router();

routes.post('/createFile', CreateFile.createFile);
routes.get('/findBestRoute', FindRoute.index);

module.exports = routes;

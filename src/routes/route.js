const { Router } = require('express');
//const { createRouteUseCase } = require('../useCases/CreateRoute');
const FindRoute = require('../useCases/FindRoute/FindRoute');
const routes = Router();

//routes.post('/createFile', createRouteUseCase.handle(request, response));
routes.get('/bestRoute', FindRoute.findRoute);

module.exports = routes;

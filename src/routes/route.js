const { Router } = require('express');
const CreateRoute = require('../useCases/CreateRoute/CreateRoute');

const routes = Router();

routes.post('/route', CreateRoute.readFile);
routes.get('/bestRoute/');

module.exports = routes;

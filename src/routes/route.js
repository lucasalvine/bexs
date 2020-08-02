const { Router, request } = require('express');
const CreateRoute = require('../useCases/CreateRoute/CreateRoute');

const routes = Router();

routes.post('/route', CreateRoute.readFile(request.file.path));
routes.get('/bestRoute/');

module.exports = routes;

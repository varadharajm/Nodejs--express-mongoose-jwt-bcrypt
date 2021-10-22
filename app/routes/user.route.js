const express = require("express");
const routes =express.Router();

const userController = require("../controllers/user.controller");
const {validateToken} = require("../middlewares/token")

routes.post('/', userController.sigup);
routes.post('/login',userController.singin);
routes.get('/user',validateToken,userController.user);
routes.get('/logoff',userController.logoff);
routes.get('*', userController.error);

module.exports = routes;

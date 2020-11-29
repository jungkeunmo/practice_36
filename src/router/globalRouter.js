import express from "express";
import { routers } from "../routers";
import { globalController } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routers.HOME, globalController.homeController);
globalRouter.get(routers.CONTACT, globalController.contactController);
globalRouter.get(routers.JAVASCRIPT, globalController.javascriptController);
globalRouter.get(routers.MONGODB, globalController.mongodbController);
globalRouter.get(routers.NODEJS, globalController.nodejsController);
globalRouter.get(routers.REACT, globalController.reactController);

export default globalRouter;
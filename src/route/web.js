import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-curd', homeController.displayGetCRUD);
    router.get('/edit-curd', homeController.getEditCRUD);

    router.post('/put-curd', homeController.putCRUD);
    router.get('/delete-curd', homeController.deleteCRUD);
    //REST API
    return app.use("/", router);
}

module.exports = initWebRoutes;
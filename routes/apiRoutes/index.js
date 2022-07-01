import express from "express";
import notesRoutes from '../apiRoutes/noteRoutes.js'
var router = express.Router();

router.use(notesRoutes);

export default router;
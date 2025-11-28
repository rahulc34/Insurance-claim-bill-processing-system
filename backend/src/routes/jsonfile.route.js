import { Router } from "express";
import multer from "multer";
const uplaod = multer({ dest: "././public" });

const router = Router();

import { createJsonFile } from "../controller/CreateJsonFile.controller.js";

router.route("/getjson").post(
  uplaod.fields([
    { name: "page1", maxCount: 1 },
    { name: "page2", maxCount: 1 },
    { name: "page3", maxCount: 1 },
  ]),
  createJsonFile
);

export default router;

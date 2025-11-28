import { Router } from "express";
import multer from "multer";
const uplaod = multer({ dest: "././public" });

const router = Router();

import { createJsonFile } from "../controller/CreateJsonFile.controller.js";

router.route("/getjson").post(
  uplaod.fields([
    { name: "bill_detail", maxCount: 1 },
    { name: "final_bills", maxCount: 1 },
    { name: "pharmacy", maxCount: 1 },
  ]),
  createJsonFile
);

export default router;

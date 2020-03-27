import express from "express";

import create from "./services/create";
import list from "./services/list";
import destroy from "./services/destroy";

const router = express.Router();

router.get("/", list);
router.post("/", create);
router.delete("/:id", destroy);

export default router;

import { Router } from "express";

import { getAlunos, create, update, deleta } from "../controllers/userController";
const route = Router();
route.get("/alunos", getAlunos);
route.post("/create", create);
route.put("/update/:id", update)
route.delete("/delete/:id", deleta)


export default route;
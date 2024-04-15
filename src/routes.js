import { Router } from "express"
const routes = new Router()

import custumers from"./app/controllers/CustumersController"

routes.get("/custumers", custumers.index)
routes.get("/custumers/:id", custumers.show)
routes.post("/custumers", custumers.create)
routes.put("/custumers/:id", custumers.uptade)
routes.delete("/custumers/:id", custumers.destroy)

export default routes


import { Request, Response, Router } from "express"

const indexRouter = Router()

indexRouter.get('/', function(_: Request, res: Response) {
  res.json({ title: 'dockerhub-test' })
})

export default indexRouter

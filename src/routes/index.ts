import { Request, Response } from 'express'
import Index from '../components'
import Renderer from '../render'

export function GET(req: Request, res: Response) {
    return res.send(Renderer(Index))
}
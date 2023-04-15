import { expressApp } from '../.vinta'
import Express from 'express'

export const expressListener = expressApp.listen(5365)
expressApp.use(Express.static('public'))
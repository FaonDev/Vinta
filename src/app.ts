import { expressApp } from '../.vinta'
import Express from 'express'

expressApp.use(Express.static('public'))
/* ... */
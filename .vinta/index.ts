import Express from 'express'
import { readdir } from 'fs'
import Chalk from 'chalk'

export const expressApp = Express()
import '../src/app'
import './assets/welcome'

readdir(__dirname + '/../src/routes', (e, availableRoutes) => availableRoutes.map(currentRoute => import(`../src/routes/${currentRoute}`).then((moduleExports) => {
    if (moduleExports?.POST) expressApp.post(currentRoute.includes('.') ? '/' : `/${currentRoute}`, (req, res) => moduleExports.POST(req, res))
    if (moduleExports?.GET) expressApp.get(currentRoute.includes('.') ? '/' : `/${currentRoute}`, (req, res) => moduleExports.GET(req, res))
})) && console.log(`Successfully loaded ${Chalk.yellow(availableRoutes.length)} route(s)`))
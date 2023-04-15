import Express from 'express'
import { readdir } from 'fs'
import Chalk from 'chalk'
import './assets/welcome'

export const expressApp = Express()
expressApp.listen(5365)

import '../src/app'

readdir(__dirname + '/../src/routes', (e, availableRoutes) => availableRoutes.map(currentRoute => import(`../src/routes/${currentRoute}`).then((moduleExports) => {
    if (moduleExports?.POST) expressApp.post(currentRoute.includes('.') ? '/' : `/${currentRoute}`, (req, res) => moduleExports.POST(req, res))
    if (moduleExports?.GET) expressApp.get(currentRoute.includes('.') ? '/' : `/${currentRoute}`, (req, res) => moduleExports.GET(req, res))
})) && console.log(`Successfully loaded ${Chalk.yellow(availableRoutes.length)} route(s)`))
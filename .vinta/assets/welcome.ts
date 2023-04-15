import { expressListener } from '../../src/app'
import Chalk from 'chalk'

console.clear()
console.log(`${Chalk.magenta('Vinta.js')} ${Chalk.bgYellow('v1.0.0')}`)
console.log(Chalk.grey(`Watched ${Chalk.white.underline('TypeScript')} compilation enabled. ${Chalk.green.italic('Happy hacking!')}`))
console.log(`Running on ${Chalk.blue(`http://localhost:${(expressListener.address() as any).port}`)}`)
console.log(Chalk.dim('...'))
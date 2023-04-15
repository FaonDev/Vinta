import Chalk from 'chalk'

console.clear()
console.log(`${Chalk.magenta('Vinta.js')} ${Chalk.bgYellow('v1.0.0')}`)
console.log(Chalk.grey(`Assisted ${Chalk.white.underline('TypeScript')} compilation enabled. ${Chalk.green.italic('Happy hacking!')}`))
console.log(`Running on ${Chalk.blueBright('http://localhost:5365')}`)
console.log(Chalk.dim('...'))
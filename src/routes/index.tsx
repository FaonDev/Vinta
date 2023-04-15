import Renderer, { GlobalStyles } from '../renderer'
import { Request, Response } from 'express'
import { DiAtom } from 'react-icons/di'

'client-side'
function MyComponent() {
    return (
        <center>
            <style>{GlobalStyles()}</style>

            <img src='/vinta.gif' />
            <h2><DiAtom />Welcome to<span>Vinta.js</span></h2>
            <p>Start editing at<a href='https://github.com/FaonDev/Vinta/blob/master/src/routes/index.tsx'>src/routes/index.tsx</a></p>
        </center>
    )
}

'server-side'
export function GET(req: Request, res: Response) {
    return res.send(Renderer(MyComponent))
}
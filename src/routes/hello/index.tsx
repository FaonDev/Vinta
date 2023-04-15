import Renderer, { GlobalStyles } from '../../renderer'
import { Request, Response } from 'express'

'client-side'
function MyComponent() {
    return (
        <center>
            <style>{GlobalStyles()}</style>
            <h2>Hello World!</h2>
        </center>
    )
}

'server-side'
export function GET(req: Request, res: Response) {
    return res.send(Renderer(MyComponent))
}
import { renderToString } from 'react-dom/server'
import Sass from 'node-sass';
import React from 'react'

export default function Render(MyComponent: () => React.ReactElement) {
    return renderToString(MyComponent())
}

export function GlobalStyles(): string {
    return (Sass.renderSync({
        file: __dirname + '/./styles/index.sass'
    }).css.toString());
}
import { GlobalStyles } from '../render'
import { DiAtom } from 'react-icons/di';

export default function () {
    return (
        <center>
            <style>{GlobalStyles()}</style>

            <img src='/vinta.gif' />
            <h2><DiAtom />Welcome to<span>Vinta.js</span></h2>
            <p>Start editing at<a href='https://github.com'>src/components/index.tsx</a></p>
        </center>
    )
}
import './style.css'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const root = createRoot(document.querySelector('#root'))

const toto = 'there'

root.render(
    <div>
       <App />
    </div>
)
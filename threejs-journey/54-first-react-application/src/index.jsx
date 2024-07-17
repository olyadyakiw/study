import './style.css'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const root = createRoot(document.querySelector('#root'))

const toto = 'there'

root.render(
    <div>
       <App clickersCount={ 3 }>
            <h1>React</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quidem?</p>
       </App>
    </div>
)
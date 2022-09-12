import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


const root = createRoot(document.getElementById('app'))
console.log(root);
root.render(<App/>)


console.log(123456);

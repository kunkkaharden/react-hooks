import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterCustomHook from './components/01-useState/CounterCustomHook'
import SimpleForm from './components/02-useEffect/SimpleForm'
// import CounterApp from './components/01-useState/CounterApp'
// import HookApp from './HookApp'
// import App from './App'


import './index.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>
)

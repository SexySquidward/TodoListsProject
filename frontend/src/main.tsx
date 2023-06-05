import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import initializeAmplify from './components/Auth/AwsConfig.ts'
const conf =  initializeAmplify()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App  isPassedToWithAuthenticator={conf}/>
  </React.StrictMode>,
)

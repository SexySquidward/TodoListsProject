import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import currentConfig from './components/Auth/AwsConfig.ts'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App  isPassedToWithAuthenticator={currentConfig}/>
  </React.StrictMode>,
)

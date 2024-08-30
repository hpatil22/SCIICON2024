import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { SidebarProvider } from './contextapi/SidebarProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-i8juvjoju54l5wto.us.auth0.com"
    clientId="kaoNZJByRnuGitzeyMn48nG2LnmvtTNy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <SidebarProvider>

    <App />
    </SidebarProvider>
  </Auth0Provider>,
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

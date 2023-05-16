import React, {ReactNode, FC} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import useTheme from './hooks/useTheme';
import './App.css';


const Theme:FC<{children: ReactNode}> = ({children})=>{
  const {UI} = useTheme();
  return <UI>{children}</UI>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Theme>
    <App />
    </Theme>
  </React.StrictMode>
);


if (process.env.NODE_EVN === "development") {
  serviceWorkerRegistration.unregister();
}else serviceWorkerRegistration.register();

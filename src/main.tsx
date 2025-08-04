import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/index.css'; // глобальные стили
import './app/styles/variables.css'; // переменные для стилей
import App from '@app/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

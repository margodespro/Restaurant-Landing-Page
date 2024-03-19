import React from 'react'; // Импорт библиотеки React
import ReactDOM from 'react-dom/client'; // Импорт метода render из библиотеки ReactDOM для работы с корнями
import App from './App'; // Импорт компонента App из файла App.js

// Создание корня приложения с использованием метода createRoot из ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеринг приложения в корень с использованием React.StrictMode
root.render(
  <React.StrictMode>
    <App /> {/* Вставка компонента App */}
  </React.StrictMode>
);

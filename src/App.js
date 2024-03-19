import "./App.css"; // Импорт файла стилей для приложения

// Импорт компонентов из соответствующих файлов
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// Определение функции компонента App
function App() {
  return (
    <div className="App"> {/* Основной контейнер приложения */}
      {/* Вставка компонентов для отображения различных секций */}
      <Home/> {/* Домашняя страница */}
      <About/> {/* Страница "О нас" */}
      <Work/> {/* Страница "Как это работает" */}
      <Testimonial/> {/* Страница с отзывами */}
      <Contact/> {/* Страница контактов */}
      <Footer/> {/* Футер */}
    </div>
  );
}

export default App; // Экспорт компонента App


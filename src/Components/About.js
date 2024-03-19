import React from 'react'; // Импорт React из библиотеки react
import AboutBackground from '../Assets/about-background.png'; // Импорт изображения заднего фона из файла about-background.png
import AboutBackgroundImage from '../Assets/about-background-image.png'; // Импорт изображения для раздела About из файла about-background-image.png
import { BsFillPlayCircleFill } from "react-icons/bs"; // Импорт иконки BsFillPlayCircleFill из библиотеки react-icons

// Определение компонента About
const About = () => {
  return (
    <div className="about-section-container"> {/* Контейнер раздела About */}
      <div className="about-background-image-container"> {/* Контейнер для изображения заднего фона */}
        <img src={AboutBackground} alt="" /> {/* Отображение изображения заднего фона */}
      </div>
      <div className="about-section-image-container"> {/* Контейнер для изображения раздела About */}
        <img src={AboutBackgroundImage} alt="" /> {/* Отображение изображения раздела About */}
      </div>
      <div className="about-section-text-container"> {/* Контейнер для текста раздела About */}
        <p className="primary-subheading">About</p> {/* Подзаголовок раздела About */}
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet {/* Заголовок раздела About */}
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> {/* Основной текст раздела About */}
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p> {/* Второй абзац основного текста раздела About */}
        <div className="about-buttons-container"> {/* Контейнер для кнопок раздела About */}
          <button className="secondary-button">Learn More</button> {/* Кнопка "Learn More" */}
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video {/* Кнопка "Watch Video" с иконкой */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default About; // Экспорт компонента About

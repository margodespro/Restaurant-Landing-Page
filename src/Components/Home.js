import React from "react"; // Импорт React из библиотеки react
import BannerBackground from "../Assets/home-banner-background.png"; // Импорт изображения заднего фона баннера из файла home-banner-background.png
import BannerImage from "../Assets/home-banner-image.png"; // Импорт изображения баннера из файла home-banner-image.png
import Navbar from "./Navbar"; // Импорт компонента навигационной панели Navbar
import { FiArrowRight } from "react-icons/fi"; // Импорт иконки стрелки вправо из библиотеки react-icons

// Определение компонента Home
const Home = () => {
  return (
    <div className="home-container"> {/* Контейнер домашней страницы */}
      <Navbar /> {/* Вставка компонента навигационной панели */}
      <div className="home-banner-container"> {/* Контейнер баннера */}
        <div className="home-bannerImage-container"> {/* Контейнер изображения заднего фона баннера */}
          <img src={BannerBackground} alt="" /> {/* Отображение изображения заднего фона баннера */}
        </div>
        <div className="home-text-section"> {/* Контейнер текстового раздела баннера */}
          <h1 className="primary-heading"> {/* Заголовок баннера */}
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text"> {/* Основной текст баннера */}
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button"> {/* Кнопка вторичного действия */}
            Order Now <FiArrowRight />{" "} {/* Текст кнопки и иконка стрелки вправо */}
          </button>
        </div>
        <div className="home-image-section"> {/* Контейнер изображения раздела баннера */}
          <img src={BannerImage} alt="" /> {/* Отображение изображения баннера */}
        </div>
      </div>
    </div>
  );
};

export default Home; // Экспорт компонента Home

import React from "react"; // Импорт React из библиотеки react
import ProfilePic from "../Assets/john-doe-image.png"; // Импорт изображения профиля из файла john-doe-image.png
import { AiFillStar } from "react-icons/ai"; // Импорт иконки звезды из библиотеки react-icons

// Определение компонента Testimonial
const Testimonial = () => {
  return (
    <div className="work-section-wrapper"> {/* Контейнер раздела с отзывом */}
      <div className="work-section-top"> {/* Верхняя часть раздела */}
        <p className="primary-subheading">Testimonial</p> {/* Подзаголовок раздела */}
        <h1 className="primary-heading">What They Are Saying</h1> {/* Заголовок раздела */}
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> {/* Основной текст раздела */}
      </div>
      <div className="testimonial-section-bottom"> {/* Нижняя часть раздела */}
        <img src={ProfilePic} alt="" /> {/* Изображение профиля */}
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p> {/* Текст отзыва */}
        <div className="testimonials-stars-container"> {/* Контейнер для звездочек рейтинга */}
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2> {/* Имя автора отзыва */}
      </div>
    </div>
  );
};

export default Testimonial; // Экспорт компонента Testimonial

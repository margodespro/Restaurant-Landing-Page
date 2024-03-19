import React from "react"; // Импорт React из библиотеки react
import Logo from "../Assets/Logo.svg"; // Импорт логотипа из файла Logo.svg
import { BsTwitter } from "react-icons/bs"; // Импорт иконки Twitter из библиотеки react-icons
import { SiLinkedin } from "react-icons/si"; // Импорт иконки LinkedIn из библиотеки react-icons
import { BsYoutube } from "react-icons/bs"; // Импорт иконки YouTube из библиотеки react-icons
import { FaFacebookF } from "react-icons/fa"; // Импорт иконки Facebook из библиотеки react-icons

// Определение компонента Footer
const Footer = () => {
  return (
    <div className="footer-wrapper"> {/* Контейнер футера */}
      <div className="footer-section-one"> {/* Первый раздел футера */}
        <div className="footer-logo-container"> {/* Контейнер логотипа */}
          <img src={Logo} alt="" /> {/* Отображение логотипа */}
        </div>
        <div className="footer-icons"> {/* Контейнер иконок социальных сетей */}
          <BsTwitter /> {/* Иконка Twitter */}
          <SiLinkedin /> {/* Иконка LinkedIn */}
          <BsYoutube /> {/* Иконка YouTube */}
          <FaFacebookF /> {/* Иконка Facebook */}
        </div>
      </div>
      <div className="footer-section-two"> {/* Второй раздел футера */}
        <div className="footer-section-columns"> {/* Контейнер столбцов */}
          <span>Qualtiy</span> {/* Элемент списка */}
          <span>Help</span> {/* Элемент списка */}
          <span>Share</span> {/* Элемент списка */}
          <span>Carrers</span> {/* Элемент списка */}
          <span>Testimonials</span> {/* Элемент списка */}
          <span>Work</span> {/* Элемент списка */}
        </div>
        <div className="footer-section-columns"> {/* Контейнер столбцов */}
          <span>244-5333-7783</span> {/* Контактный номер */}
          <span>hello@food.com</span> {/* Адрес электронной почты */}
          <span>press@food.com</span> {/* Адрес электронной почты для прессы */}
          <span>contact@food.com</span> {/* Контактный адрес электронной почты */}
        </div>
        <div className="footer-section-columns"> {/* Контейнер столбцов */}
          <span>Terms & Conditions</span> {/* Ссылка на условия использования */}
          <span>Privacy Policy</span> {/* Ссылка на политику конфиденциальности */}
        </div>
      </div>
    </div>
  );
};

export default Footer; // Экспорт компонента Footer

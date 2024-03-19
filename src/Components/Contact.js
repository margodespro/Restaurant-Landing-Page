import React from "react"; // Импорт React из библиотеки react

// Определение компонента Contact
const Contact = () => {
  return (
    <div className="contact-page-wrapper"> {/* Контейнер страницы контактов */}
      <h1 className="primary-heading">Have Question In Mind?</h1> {/* Заголовок раздела */}
      <h1 className="primary-heading">Let Us Help You</h1> {/* Второй заголовок раздела */}
      <div className="contact-form-container"> {/* Контейнер формы контактов */}
        <input type="text" placeholder="yourmail@gmail.com" /> {/* Поле ввода адреса электронной почты */}
        <button className="secondary-button">Submit</button> {/* Кнопка отправки формы */}
      </div>
    </div>
  );
};

export default Contact; // Экспорт компонента Contact

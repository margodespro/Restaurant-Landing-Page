import React from "react"; // Импорт React из библиотеки react
import PickMeals from "../Assets/pick-meals-image.png"; // Импорт изображения "Выберите блюда" из файла pick-meals-image.png
import ChooseMeals from "../Assets/choose-image.png"; // Импорт изображения "Выберите, как часто" из файла choose-image.png
import DeliveryMeals from "../Assets/delivery-image.png"; // Импорт изображения "Быстрая доставка" из файла delivery-image.png

// Определение компонента Work
const Work = () => {
  // Массив объектов с информацией о работе
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];

  return (
    <div className="work-section-wrapper">
      {" "}
      {/* Контейнер раздела работы */}
      <div className="work-section-top">
        {" "}
        {/* Верхняя часть раздела */}
        <p className="primary-subheading">Work</p> {/* Подзаголовок раздела */}
        <h1 className="primary-heading">How It Works</h1>{" "}
        {/* Заголовок раздела */}
        <p className="primary-text">
          {" "}
          {/* Основной текст раздела */}
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {" "}
        {/* Нижняя часть раздела */}
        {workInfoData.map(
          (
            data // Отображение информации о работе для каждого элемента массива
          ) => (
            <div className="work-section-info" key={data.title}>
              {" "}
              {/* Контейнер информации о работе */}
              <div className="info-boxes-img-container">
                {" "}
                {/* Контейнер для изображения */}
                <img src={data.image} alt="" /> {/* Отображение изображения */}
              </div>
              <h2>{data.title}</h2> {/* Заголовок информации */}
              <p>{data.text}</p> {/* Текст информации */}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Work; // Экспорт компонента Work

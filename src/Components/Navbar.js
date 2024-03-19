import React, { useState } from "react"; // Импорт React и хука useState из библиотеки react
import Logo from "../Assets/Logo.svg"; // Импорт логотипа из файла Logo.svg
import { BsCart2 } from "react-icons/bs"; // Импорт иконки корзины из библиотеки react-icons
import { HiOutlineBars3 } from "react-icons/hi2"; // Импорт иконки бокового меню из библиотеки react-icons
import Box from "@mui/material/Box"; // Импорт компонента Box из библиотеки Material-UI
import Drawer from "@mui/material/Drawer"; // Импорт компонента Drawer из библиотеки Material-UI
import List from "@mui/material/List"; // Импорт компонента List из библиотеки Material-UI
import Divider from "@mui/material/Divider"; // Импорт компонента Divider из библиотеки Material-UI
import ListItem from "@mui/material/ListItem"; // Импорт компонента ListItem из библиотеки Material-UI
import ListItemButton from "@mui/material/ListItemButton"; // Импорт компонента ListItemButton из библиотеки Material-UI
import ListItemIcon from "@mui/material/ListItemIcon"; // Импорт компонента ListItemIcon из библиотеки Material-UI
import ListItemText from "@mui/material/ListItemText"; // Импорт компонента ListItemText из библиотеки Material-UI
import HomeIcon from "@mui/icons-material/Home"; // Импорт иконки домашней страницы из библиотеки Material-UI
import InfoIcon from "@mui/icons-material/Info"; // Импорт иконки информации из библиотеки Material-UI
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"; // Импорт иконки отзывов из библиотеки Material-UI
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"; // Импорт иконки телефона из библиотеки Material-UI
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"; // Импорт иконки корзины из библиотеки Material-UI

// Определение компонента Navbar
const Navbar = () => {
  // Инициализация состояния для открытия и закрытия бокового меню
  const [openMenu, setOpenMenu] = useState(false);

  // Опции меню, каждая с текстом и соответствующей иконкой
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      {/* Контейнер логотипа */}
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      {/* Контейнер ссылок навигационного меню */}
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        {/* Иконка корзины */}
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        {/* Кнопка вызова бокового меню */}
        <button className="primary-button">Bookings Now</button>
      </div>
      {/* Контейнер иконки бокового меню */}
      <div className="navbar-menu-container">
        {/* Иконка бокового меню с обработчиком клика */}
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      {/* Боковое меню */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        {/* Контейнер для элементов бокового меню */}
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          {/* Список элементов бокового меню */}
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  {/* Иконка элемента */}
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {/* Текст элемента */}
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* Разделитель */}
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar; // Экспорт компонента Navbar


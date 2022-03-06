import "./App.scss";

import { Button } from "antd";

import { ReactComponent as ReactLogo } from "./components/logo.svg";
import { ReactComponent as Sticker } from "./components/actionsSticker.svg";
import { ReactComponent as LightningIcon } from "./components/lightningIcon.svg";

function App() {
  return (
    <div className="App">
      <div className="section section-header">
        <div className="section_wrapper">
          <header className="header">
            <ReactLogo className="logo1" />
            <ul className="header__menu">
              <li className="header__item">Акции</li>
              <li className="header__item">Что включено</li>
              <li className="header__item">Цены</li>
              <li className="header__item">Как пользоваться?</li>
              <li className="header__item">Контакты</li>
            </ul>
            <a href="tel:+78452496987" className="telephone">
              +7 (8452) 49 69 87
            </a>
            <Button className="Button">Вход</Button>
          </header>
        </div>
      </div>
      <section className="section actions">
        <div className="section_wrapper">
          <div className="section-title actions__title">
            Действующие <span className="text-accent">акции</span>
          </div>
          <ul className="actions__list">
            <li className="action-card">
              <Sticker className="actions-sticker" />
              <div className="action-card__time-to-end">
                <LightningIcon />
                <span className="action-card__title">
                  Акция закончится через 11 часов 20 минут
                </span>
              </div>
              <span className="action-days">
                Скидка на покупку абонемента 7 дней
              </span>
              <div className="action-new-condition">
                <div className="action-new-condition__wrapper">
                  <span className="action-prev-price">1 день = 490 ₽</span>
                  <span className="action-new-price">
                    7 дней = 2 800 ₽ (400 ₽ в день)
                  </span>
                </div>
                <Button className="Button action-button">Купить</Button>
              </div>
            </li>
            <li className="action-card"></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;

import { Carousel } from "antd";
import classNames from "classnames";
import React from "react";
import Section from "../Section";
import s from "./Tariffs.module.scss";
import Slide from "./images/slide.jpeg";
import Slide2 from "./images/slide2.png";
import { ReactComponent as PromoSign } from "./images/propmoSign.svg";

export default function Tariffs() {
  return (
    <Section
      id="prices"
      className={classNames(s["compare-section"], s["tariffs-section"])}
    >
      <div
        className={classNames("section_wrapper", s["tariffs-section-wrapper"])}
      >
        <div
          className={classNames("section-title", s["tariffs-section-title"])}
        >
          <span className="text-accent">Выбери тариф для себя</span>
          <br />
          или своей команды
        </div>
        <div className={s.coworking}>
          <div className={s["coworking__name"]}>Альфа-коворкинг</div>

          <div className={s["coworking__block"]}>
            <Carousel autoplay className={s["coworking__carousel"]}>
              {new Array(4).fill(null).map((_, index) => {
                return (
                  <div className={s.slide}>
                    <img src={Slide} alt="" />
                  </div>
                );
              })}
            </Carousel>
            <ul className={s["coworking__tariffs"]}>
              <div className={s["promo-sign"]}>
                <PromoSign />
              </div>
              {new Array(4).fill(null).map((_, index) => {
                return (
                  <li className={s["tariff"]}>
                    <div className={s["tariff__text-wrapper"]}>
                      <div className={s["tariff__name"]}>Пакет 7 дней</div>
                      <div className={s["tariff__title"]}>
                        7 посещений коворкинга в течение любого периода времени
                      </div>
                    </div>
                    <div className={s["tariff__price-wrapper"]}>
                      <div className={s["tariff__price"]}>2 800 ₽</div>
                      <div className={s["tariff__price-per-day"]}>
                        400 р/день
                      </div>
                    </div>
                    <button className="Button">Выбрать</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={s.coworking}>
          <div
            className={classNames(
              s["coworking__name"],
              s["coworking__name--dark"]
            )}
          >
            БЕТА-КОВОРКИНГ
          </div>

          <div className={s["coworking__block"]}>
            <Carousel autoplay className={s["coworking__carousel"]}>
              {new Array(4).fill(null).map((_, index) => {
                return (
                  <div className={s.slide}>
                    <img src={Slide2} alt="" />
                  </div>
                );
              })}
            </Carousel>
            <ul className={s["coworking__tariffs"]}>
              <div className={s["promo-sign"]}>
                <PromoSign />
              </div>
              {new Array(4).fill(null).map((_, index) => {
                return (
                  <li className={s["tariff"]}>
                    <div className={s["tariff__text-wrapper"]}>
                      <div className={s["tariff__name"]}>Пакет 7 дней</div>
                      <div className={s["tariff__title"]}>
                        7 посещений коворкинга в течение любого периода времени
                      </div>
                    </div>
                    <div className={s["tariff__price-wrapper"]}>
                      <div className={s["tariff__price"]}>2 800 ₽</div>
                      <div className={s["tariff__price-per-day"]}>
                        400 р/день
                      </div>
                    </div>
                    <button className="Button">Выбрать</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Col, Row } from "antd";
import classNames from "classnames";
import React from "react";
import Section from "../Section";
import s from "./HowUse.module.scss";

export default function HowUse() {
  return (
    <Section id="how-use" className={classNames(s["how-use-section"])}>
      <div
        className={classNames("section_wrapper", s["how-use-section-wrapper"])}
      >
        <Row>
          <Col span={12}>
            <div className={s["how-use-description"]}>
              <div
                className={classNames(
                  "section-title",
                  s["how-use-section__title"]
                )}
              >
                <span className="text-accent">КАК ПОЛЬЗОВАТЬСЯ</span>{" "}
                КОВОРКИНГОМ
              </div>
              <div className={s["how-use-section__tip"]}>
                <div className={s["how-use-section__tip-icon"]}>
                  <span className="text-accent">*</span>
                </div>
                <div className={s["how-use-section__tip-text"]}>
                  Если вы впервые, администратор выдаст промокод на первый
                  бесплатный день, по которому вы сможете провести{" "}
                  <span className="text-accent-uppercase">
                    <span className="text-accent-bold">
                      первый день абсолютно бесплатно
                    </span>
                  </span>
                </div>
              </div>
              <div
                className={classNames(
                  s["how-use-section__tip"],
                  s["how-use-section__tip--bottom"]
                )}
              >
                <div className={s["how-use-section__tip-icon"]}>
                  <span className="text-accent">?</span>
                </div>
                <div className={s["how-use-section__tip-text"]}>
                  <span
                    className={classNames(
                      "text-accent-bold",
                      s["how-use-section__tip-subtitle"]
                    )}
                  >
                    У меня абонемент на 7 дней. Значит ли это, что мне надо
                    ходить каждый день в течение недели?
                  </span>
                  <div>
                    <span className="text-accent-bold">
                      Нет! Не нужно ходить каждый день{" "}
                    </span>
                    - расходуйте дни, когда Вам удобно! Дни не сгорают, если Вы
                    не ходите в коворкинг!
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <ul className={s.rules}>
              <li className={s["rules-item"]}>
                <div className={s["rules-item__count"]}>01</div>
                <div className={s["rules-item__text"]}>
                  <div className={s["rules-item__title"]}>
                    Зарегистрироваться
                  </div>
                  <div className={s["rules-item__subtitle"]}>
                    Вам необходимо зарегистрироваться на сайте bekker-place.ru
                  </div>
                </div>
              </li>
              <li className={s["rules-item"]}>
                <div className={s["rules-item__count"]}>02</div>
                <div className={s["rules-item__text"]}>
                  <div className={s["rules-item__title"]}>
                    <span className="text-accent">*</span> Пополнить баланс
                  </div>
                  <div className={s["rules-item__subtitle"]}>
                    Пополнить баланс на желаемую сумму
                  </div>
                </div>
              </li>
              <li className={s["rules-item"]}>
                <div className={s["rules-item__count"]}>03</div>
                <div className={s["rules-item__text"]}>
                  <div className={s["rules-item__title"]}>Купить дни</div>
                  <div className={s["rules-item__subtitle"]}>
                    Приобрести нужное количество дней в одном из двух
                    коворкингов
                  </div>
                </div>
              </li>
              <li className={s["rules-item"]}>
                <div className={s["rules-item__count"]}>04</div>
                <div className={s["rules-item__text"]}>
                  <div className={s["rules-item__title"]}>
                    Приехать в коворкинг
                  </div>
                  <div className={s["rules-item__subtitle"]}>
                    При входе отсканировать QR-код на проходной в данном
                    коворкинге
                  </div>
                </div>
              </li>
              <li className={s["rules-item"]}>
                <div className={s["rules-item__count"]}>05</div>
                <div className={s["rules-item__text"]}>
                  <div className={s["rules-item__title"]}>Работать</div>
                  <div className={s["rules-item__subtitle"]}>
                    В течение дня вы можете выходить и заходить в коворкинг
                    неограниченное количество раз, повторного списания не будет
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

import { Col, Row } from "antd";
import classNames from "classnames";
import Section from "../Section";
import s from "./CompareSection.module.scss";
import Diagram from "./images/diagram.png";
import FirstPromo from "./images/first_promo.jpeg";
import Cafe from "./images/cafe.png";
import { ReactComponent as NegationIcon } from "./images/negationIcon.svg";

console.log(s);

export default function CompareSection() {
  return (
    <Section className={s["compare-section"]}>
      <div
        className={classNames("section_wrapper", s["compare-section-wrapper"])}
      >
        <Row gutter={[30, 0]} className={s["diagram-compare"]}>
          <Col span={12} className={s["compare-diagram"]}>
            <div className={classNames(s["compare-diagram-title"])}>
              <div
                className={classNames(
                  "section-title",
                  s["compare-section__title"]
                )}
              >
                ОФис VS <span className="text-accent">КОВОРКИНГ.</span>
              </div>
              <div className="section-title compare-section__title">
                ЧТо выгоднее?
              </div>
            </div>
            <div className={s["compare-diagram-pic"]}>
              <img src={Diagram} alt="" />
            </div>
            <div
              className={classNames(s["compare-subtitle"], "text-accent-bold")}
            >
              Попробуйте все преимущества коворкинга на
              <span className="text-accent"> первом бесплатном посещении</span>
            </div>
            <button className="Button">Получить бесплатный день</button>
          </Col>
          <Col span={12}>
            <div
              className={classNames(
                s["compare-subtitle"],
                s["compare-subtitle--height"],
                "text-accent-bold"
              )}
            >
              Если вы думаете, что выгоднее иметь собственный офис, то
              посмотрите{" "}
              <span className="text-accent">
                сколько дополнительных платежей скрыто от вашего взора
              </span>
            </div>
            <div className={s["compare-table"]}>
              <div className={s["compare-table-row"]} style={{ height: 60 }}>
                {" "}
              </div>
              <div className={s["compare-table-row"]}>Офис</div>
              <div className={s["compare-table-row"]}>Коворкинг</div>
              <div
                className={s["compare-table-row"]}
                style={{ height: "364px" }}
              ></div>
              <div className={s["compare-table-row"]}> </div>
              <div className={s["compare-table-row"]}> </div>
              <div className={s["compare-table-row"]} style={{ height: 60 }}>
                Сумма за месяц
              </div>
              <div className={s["compare-table-row"]}>32 200 ₽</div>
              <div className={s["compare-table-row"]}>8 900 ₽</div>
            </div>
            <div className={s["compare-section-text"]}>
              *За офис вы обязаны платить ежемесячно, вне зависимости от того,
              пользовались ли вы им или нет.
            </div>
            <div className={s["compare-section-text"]}>
              За коворкинг вы платите лишь тогда, когда непосредственно его
              посещаете
            </div>
          </Col>
        </Row>
        <div className={s["compare-cards-wrapper"]}>
          <div
            className={classNames("section-title", s["compare-cards-title"])}
          >
            Не ходите в коворкинг -
            <span className="text-accent">не платите!</span>
          </div>
          <Row gutter={[30, 0]} className={s["compare-cards"]}>
            {new Array(2).fill(null).map((_, index) => {
              return (
                <Col span={12}>
                  <div className={s["compare-card"]}>
                    <div className={s["compare-card__header-title"]}>
                      <span className="text-accent">Думаете</span>, работать из
                      кафе удобнее?
                    </div>
                    <div className={s["compare-card-pic"]}>
                      <img
                        src={Cafe}
                        alt=""
                        className={s["compare-card-img"]}
                      />
                    </div>
                    <div className={s["compare-card__title"]}>
                      Если вы думаете, что можете бесплатно просидеть в кафе
                      каждый день и не оставить там ни копейки - вы ошибаетесь.{" "}
                      <span className="text-accent-bold">
                        Обычно, фрилансер оставляет там от 600 рублей в день.
                      </span>
                    </div>
                    <div className={s["compare-card__subtitle"]}>
                      Также в кафе вы столкнетесь с такими проблемами как:
                    </div>
                    <ul className={s["negation-list"]}>
                      <li className={s["negation-item"]}>
                        <NegationIcon className={s["negation-icon"]} />
                        <div className={s["negation-item__title"]}>
                          Отсутствие качественного интернета
                        </div>
                      </li>
                      <li className={s["negation-item"]}>
                        <NegationIcon className={s["negation-icon"]} />
                        <div className={s["negation-item__title"]}>
                          Не везде есть розетки
                        </div>
                      </li>
                      <li className={s["negation-item"]}>
                        <NegationIcon className={s["negation-icon"]} />
                        <div className={s["negation-item__title"]}>
                          Музыка и разговоры на фоне
                        </div>
                      </li>
                      <li className={s["negation-item"]}>
                        <NegationIcon className={s["negation-icon"]} />
                        <div className={s["negation-item__title"]}>
                          Косые взгляды официантов, так как им не выгодно, чтобы
                          вы занимали столик весь день, заказав только один кофе
                        </div>
                      </li>
                      <li className={s["negation-item"]}>
                        <NegationIcon className={s["negation-icon"]} />
                        <div className={s["negation-item__title"]}>
                          Отсутствие рабочей атмосферы и как результат, падает
                          ваша концентрация
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              );
            })}
          </Row>
          <button className="Button">Попробовать коворкинг</button>
        </div>

        <div className={s["first-promo-title-wrapper"]}>
          <div className={classNames("section-title", s["first-promo-title"])}>
            НЕ УВЕРЕНЫ,
            <span className="text-accent"> ЧТО ВАМ ПОДОЙДЕТ КОВОРКИНГ?</span>
          </div>
          <div
            className={classNames(
              s["first-promo-subtitle"],
              "text-accent-bold"
            )}
          >
            лучше один раз увидеть, чем 100 раз услышать!
          </div>
        </div>
        <div className={s["first-promo"]}></div>
        <Row className={s["first-promo"]}>
          <Col span={12}>
            <div className={s["first-promo__pic"]}>
              <img
                src={FirstPromo}
                alt=""
                className={s["first-promo__img"]}
              ></img>
            </div>
          </Col>
          <Col span={12}>
            <div className={s["first-promo__text-content"]}>
              <div
                className={classNames(
                  s["first-promo__text-content-title"],
                  "section-title"
                )}
              >
                Первое полноценное посещение коворкинга АБСОЛЮТНО{" "}
                <span className="text-accent">бесплатно!</span>
              </div>
              <div className={classNames(s["first-promo-subtitle"])}>
                Просто приходите в любой удобный вам день, и администратор сразу
                выдаст вам промокод на <span className="text-accent">*</span>
                бесплатное посещение!
              </div>
              <div
                className={classNames(
                  s["first-promo-subtitle"],
                  s["first-promo-subtitle--addition"]
                )}
              >
                <span className="text-accent">* </span>акция действует в обоих
                коворкингах, вы можете получить по одному дню в альфа и бета
                коворкингах
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

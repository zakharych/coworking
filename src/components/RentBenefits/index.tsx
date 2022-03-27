import { Col, Row } from "antd";
import classNames from "classnames";
import Section from "../Section";
import s from "./RentBenefits.module.scss";
import { ReactComponent as ParkingIcon } from "./images/ParcingIcon.svg";

export default function RentBenefits() {
  return (
    <Section id="benefits" className={s["rent-benefits-section"]}>
      <div
        className={classNames(
          "section_wrapper",
          s["rent-benefits-section-wrapper"]
        )}
      >
        <div
          className={classNames(
            "section-title",
            s["rent-benefits-section__title"]
          )}
        >
          в аренду места <span className="text-accent">Включено:</span>
        </div>
        <Row gutter={[24, 48]}>
          {new Array(14).fill(null).map((_, index) => {
            return (
              <Col span={8}>
                <div className={s["benefits-item"]}>
                  <div className={s["benefits-item__icon"]}>
                    <ParkingIcon />
                  </div>

                  <div className={s["benefits-item__title"]}>
                    Бесплатная парковка
                  </div>
                </div>
              </Col>
            );
          })}

          <Col span={8}>
            <div className={s["benefits-item"]}>
              <div className={s["benefits-item__title"]}>
                Все это вы получаете вне зависимости от выбранного тарифа или
                абонемента
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Section>
  );
}

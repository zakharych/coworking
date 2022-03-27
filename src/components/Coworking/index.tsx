import { Col, Row } from "antd";
import classNames from "classnames";
import Section from "../Section";
import { ReactComponent as CashIcon } from "./images/CashIcon.svg";
import { ReactComponent as AcceptIcon } from "./images/Accept.svg";
import { ReactComponent as ArrowsIcon } from "./images/Arrows.svg";
import { ReactComponent as GroupIcon } from "./images/Group.svg";
import { ReactComponent as PortfolioIcon } from "./images/Portfolio.svg";
import { ReactComponent as RocketIcon } from "./images/Rocket.svg";
import s from "./Coworking.module.scss";

const content = [
  {
    icon: <CashIcon />,
    title: "Выгода",
    text_content:
      "Снимая рабочее место в коворкинге, вы экономите на оплате электричества, коммунальных услугах, канцелярии, оргтехнике, уборке, кофе и др.",
  },
  {
    icon: <RocketIcon />,
    title: "Продуктивность",
    text_content:
      "Энергетическая обстановка заряженных на победу людей, не даст вам бездельничать. Здесь не возникнет желание поваляться на диване с сериалом вместо работы",
  },
  {
    icon: <GroupIcon />,
    title: "Знакомства и нетворкинг",
    text_content:
      "Коворкинг - это ваше новое окружение, в которое входят мотивированные и творческие люди. Здесь вы найдете и коллег по цеху, и друзей в новых отраслях, и клиентов",
  },
  {
    icon: <PortfolioIcon />,
    title: "Никакого визуального шума",
    text_content:
      "Стильные интерьеры наших коворкингов помогают максимально настроиться на рабочий лад. Ничего не будет отвлекать вас от работы",
  },
  {
    icon: <ArrowsIcon />,
    title: "Несгораемые дни",
    text_content:
      "Здесь вы платите только за вход. Для вас в неограниченном количестве кофе, чай, снеки, фрукты, интернет, тв, парковка, переговорные и zoom комнаты",
  },
  {
    icon: <AcceptIcon />,
    title: "Все включено",
    text_content:
      "Вы сами решаете, когда вам удобно посещать коворкинг.Дни не сгорают, если вы не посещаете коворкинг. ",
  },
];

export default function Coworking() {
  return (
    <Section className={s.benefit}>
      <div className={"section_wrapper"}>
        <div
          className={classNames("section-title", s["benefit-section__title"])}
        >
          Коворкинг — <span className="text-accent">это выгодно</span>
        </div>
        <Row gutter={[60, 54]}>
          {content.map(({ icon, title, text_content }) => {
            return (
              <Col className={s.benefit__item} span={8}>
                <div className={s["benefit__title-wrapper"]}>
                  {icon}
                  <div className={s["benefit__title"]}>{title}</div>
                </div>
                <div className={s["benefit__description"]}>{text_content}</div>
              </Col>
            );
          })}
        </Row>
      </div>
    </Section>
  );
}

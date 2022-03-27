import classNames from "classnames";
import Section from "../Section";
import s from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../components/logo.svg";

export default function Footer() {
  return (
    <Section className={classNames(s["footer-section"])}>
      <div className={classNames("section_wrapper", s.footer)}>
        <Logo className={s.logo} />

        <ul className={s.footer__menu}>
          <li className={s["footer__menu-item"]}>
            <a className={s["footer__menu-link"]} href="#actions">
              Акции
            </a>
          </li>
          <li className={s["footer__menu-item"]}>
            <a className={s["footer__menu-link"]} href="#benefits">
              Что включено
            </a>
          </li>
          <li className={s["footer__menu-item"]}>
            <a className={s["footer__menu-link"]} href="#prices">
              Цены
            </a>
          </li>
          <li className={s["footer__menu-item"]}>
            <a className={s["footer__menu-link"]} href="#how-use">
              Как пользоваться?
            </a>
          </li>
        </ul>
        <a href="/#" className={s.policy}>
          Политика конфиденциальности
        </a>
      </div>
    </Section>
  );
}

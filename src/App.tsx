import "./App.scss";

import { Layout, Menu, Breadcrumb, Button } from "antd";

import { ReactComponent as ReactLogo } from "./components/logo.svg";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <div className="section-header">
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
            <Button>Вход</Button>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;

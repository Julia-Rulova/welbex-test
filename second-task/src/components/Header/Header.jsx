import './Header.css';

import { useWindowSize } from '../../utils/useWindowSize';

import logo from '../../images/logo.svg';
import telegram from '../../images/telegram.svg';
import viber from '../../images/viber.svg';
import whatsapp from '../../images/whatsapp.svg';

export default function Header() {
    const width = useWindowSize();

    return (
        <header>
            {width > 500
                ?
                (
                    <div className="header">
                        <div className="header__logo-container">
                            <img className="header__logo" src={logo} alt="логотип." />
                            <p className="header__logo-text">крупный интегратор CRM в Росcии и ещё 8 странах</p>
                        </div>

                        <ul className="header__navigation">
                            <li className="header__navigation-item">Услуги</li>
                            <li className="header__navigation-item">Виджеты</li>
                            <li className="header__navigation-item">Интеграции</li>
                            <li className="header__navigation-item">Кейсы</li>
                            <li className="header__navigation-item">Сертификаты</li>
                        </ul>

                        <div className="header__contacts">
                            <p className="header__phone">+7 555 555-55-55</p>
                            <ul className="header__contacts-list">
                                <li className="header__contacts-item"><img src={telegram} alt="телеграм." /></li>
                                <li className="header__contacts-item"><img src={viber} alt="вайбер." /></li>
                                <li className="header__contacts-item"><img src={whatsapp} alt="ватсап." /></li>
                            </ul>
                        </div>
                    </div>
                ) :
                <ul className="header__mobile">
                    <li className="header__mobile-item">Услуги</li>
                    <li className="header__mobile-item">Виджеты</li>
                    <li className="header__mobile-item">Интеграции</li>
                    <li className="header__mobile-item">Кейсы</li>
                </ul>
            }
        </header>
    )
}
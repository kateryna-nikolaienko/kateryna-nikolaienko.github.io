import { Component } from "react";
import './App.css';
import './Slick.css';
import './Reset.css';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <div className="body">
        <div className="wrapper">
          <header className="header">
            <div className="container">
              <div className="header__inner">
                <div className="header__top">
                  <a className="logo" href="/">
                    <img src={logo} alt="Logo"></img>
                  </a>

                  <nav className="menu">
                    <ul className="menu__list menu__list-left">
                      <li className="menu__item">
                        <a className="menu__item-link" href="/">Home</a>
                      </li>
                      <li className="menu__item">
                        <a className="menu__item-link" href="/">About</a>
                      </li>
                      <li className="menu__item">
                        <a className="menu__item-link" href="/">Services</a>
                      </li>
                      <li className="menu__item">
                        <a className="menu__item-link" href="/">Blog</a>
                      </li>
                      <li className="menu__item">
                        <a className="menu__item-link" href="/">Contact</a>
                      </li>
                    </ul>
                  </nav>

                  <div className="header__box">
                    <a className="menu__button" href="/"> Sign In </a>
                    <button className="menu__burger">
                      <svg
                        className="menu__burger-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="18"
                        viewBox="0 0 30 18"
                        fill="none"
                      >
                        <path d="M0 0H30V2H0V0Z" fill="white"></path>
                        <path d="M0 8H30V10H0V8Z" fill="white"></path>
                        <rect y="16" width="30" height="2" fill="white"></rect>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="header__content">
                  <div className="header__content-left">
                    <span className="header__content-subtitle">
                      Next genaretion platform
                    </span>
                    <h1 className="header__content-title">
                      Artificial intelligence & Syber security
                    </h1>
                    <p className="header__content-text">
                      Lorem ipsum is placeholder text commonly used in the graphic,
                      print, and publishing industries for previewing layouts and
                      visual mockups.
                    </p>
                    <div className="header__content-buttons">
                      <a className="header__btn" href="/">Get Started</a>
                      <a className="header__btn header__btn-box" href="/">
                        <img
                          className="header__btn-img"
                          src="images/play-button.svg"
                          alt=""
                        />
                        Watch Video
                      </a>
                    </div>
                  </div>
                  <div className="header__content-right">
                    <img src="/images/header.png" alt="Syber security" />
                  </div>
                </div>

                <ul className="header__bottom header__slider">
                  <li className="header__bottom-item">
                    <img src="/images/partners/1.png" alt="partner" />
                  </li>
                  <li className="header__bottom-item">
                    <img src="/images/partners/2.png" alt="partner" />
                  </li>
                  <li className="header__bottom-item">
                    <img src="/images/partners/3.png" alt="partner" />
                  </li>
                  <li className="header__bottom-item">
                    <img src="/images/partners/4.png" alt="partner" />
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <main className="page">
            <section className="about">
              <div className="about__container container">
                <div className="about__inner">
                  <div className="about__inner-img">
                    <img src="images/about.png" alt="About company" />
                  </div>
                  <div className="about__inner-content">
                    <h2 className="about__inner-title">
                      Apply AI, Deep Learning and Data Sciece to solve
                    </h2>
                    <p className="about__inner-text">
                      Lorem ipsum is placeholder text commonly used in the graphic,
                      print, and publishing industries for previewing layouts and
                      visual mockups.
                    </p>
                    <a className="about__inner-button" href="/"> Learn More </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="slider slick-slider">
              <div className="slider__box slick-list">
                <div className="slider__item">
                  <div className="slider__picture">
                    <img src="images/slider/1.png" alt="" />
                  </div>
                  <h4 className="slider__title">
                    Naxly as the Winners in Global Agency Awards
                  </h4>
                  <p className="slider__text">
                    Lorem ipsum is placeholder text commonly used in print, and
                    publishing industries for previewing layouts and visual mockups.
                  </p>
                </div>
              </div>

              <div className="slider__box">
                <div className="slider__item">
                  <div className="slider__picture">
                    <img src="images/slider/2.png" alt="" />
                  </div>
                  <h4 className="slider__title">
                    Naxly as the Winners in Global Agency Awards
                  </h4>
                  <p className="slider__text">
                    Lorem ipsum is placeholder text commonly used in print, and
                    publishing industries for previewing layouts and visual mockups.
                  </p>
                </div>
              </div>

              <div className="slider__box">
                <div className="slider__item">
                  <div className="slider__picture">
                    <img src="images/slider/3.png" alt="" />
                  </div>
                  <h4 className="slider__title">
                    Naxly as the Winners in Global Agency Awards
                  </h4>
                  <p className="slider__text">
                    Lorem ipsum is placeholder text commonly used in print, and
                    publishing industries for previewing layouts and visual mockups.
                  </p>
                </div>
              </div>

              <div className="slider__box">
                <div className="slider__item">
                  <div className="slider__picture">
                    <img src="images/slider/4.png" alt="" />
                  </div>
                  <h4 className="slider__title">
                    Naxly as the Winners in Global Agency Awards
                  </h4>
                  <p className="slider__text">
                    Lorem ipsum is placeholder text commonly used in print, and
                    publishing industries for previewing layouts and visual mockups.
                  </p>
                </div>
              </div>

              <div className="slider__box">
                <div className="slider__item">
                  <div className="slider__picture">
                    <img src="images/slider/5.png" alt="" />
                  </div>
                  <h4 className="slider__title">
                    Naxly as the Winners in Global Agency Awards
                  </h4>
                  <p className="slider__text">
                    Lorem ipsum is placeholder text commonly used in print, and
                    publishing industries for previewing layouts and visual mockups.
                  </p>
                </div>
              </div>

              <div className="slider__box">
                <div className="slider__item">
                  <div className="slider__picture">
                    <img src="images/slider/3.png" alt="" />
                  </div>
                  <h4 className="slider__title">
                    Naxly as the Winners in Global Agency Awards
                  </h4>
                  <p className="slider__text">
                    Lorem ipsum is placeholder text commonly used in print, and
                    publishing industries for previewing layouts and visual mockups.
                  </p>
                </div>
              </div>

              <div className="slick-dots"></div>
            </section>

            <section className="solutions">
              <div className="solutions__container container">
                <div className="solutions__inner">
                  <div className="solutions__inner-content">
                    <h2 className="solutions__inner-title">
                      What our clients say about our awesome solutions
                    </h2>
                    <p className="solutions__inner-text">
                      To take a trivial example, which of us ever undertakes
                      laborious physical exercise, except to obtain some advantage
                      from it who do not know.
                    </p>
                    <p className="solutions__inner-text">
                      Lorem ipsum is placeholder text commonly used in the graphic,
                      print, and publishing .
                    </p>
                    <p className="solutions__inner-text">
                      Lorem ipsum is placeholder previewing layouts and visual
                      mockups.
                    </p>
                    <p className="solutions__inner-text">
                      Lorem ipsum is placeholder text commonly used in the graphic,
                      print, and publishing industries for previewing layouts and
                      visual mockups.
                    </p>
                  </div>
                  <div className="solutions__inner-img">
                    <img src="images/solutions.png" alt="About solutions" />
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="footer">
            <div className="footer__container container">
              <div className="footer__inner">
                <div className="footer__inner-information">
                  <a className="footer__inner-logo" href="/">
                    <img src="images/logo2.png" alt="Logotype" />
                  </a>
                  <p className="footer__inner-text">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and layouts and visual mockups.
                  </p>

                  <div className="footer__inner-contacts">
                    <a className="footer__inner-email" href="mailto:Company@gmail.com">
                      <img
                        className="footer__inner-icon"
                        src="images/contacts/email.svg"
                        alt="Email"
                      />
                      Company@gmail.com.com
                    </a>
                    <a className="footer__inner-phone" href="tel:064-332-1233">
                      <img
                        className="footer__inner-icon"
                        src="images/contacts/phone.svg"
                        alt="Phone"
                      />
                      Phone: (064) 332-1233
                    </a>
                    <a
                      className="footer__inner-location"
                      href="https://goo.gl/maps/pXKYQNYwuocuw3Rq5"
                    >
                      <img
                        className="footer__inner-icon"
                        src="images/contacts/location.svg"
                        alt="location"
                      />
                      450 Wall Street, USA, New York
                    </a>
                  </div>
                </div>

                <div className="footer__inner-box">
                  <h4 className="footer__inner-title">INFORMATION</h4>
                  <ul className="fotter__inner-list">
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> New Collection </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> About Store </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Contact Us </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Latest News </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Our Sitemap </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Orders History </a>
                    </li>
                  </ul>
                </div>

                <div className="footer__inner-box">
                  <h4 className="footer__inner-title">FOOTER MENU</h4>
                  <ul className="fotter__inner-list">
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Instagram profile </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> New Collection </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Contact Us </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Latest News </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/">
                        Terms & Conditions
                      </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Purchase Theme </a>
                    </li>
                  </ul>
                </div>

                <div className="footer__inner-box">
                  <h4 className="footer__inner-title">USEFUL LINKS</h4>
                  <ul className="fotter__inner-list">
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> New Collection </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> About Store </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Contact Us </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Latest News </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Our Sitemap </a>
                    </li>
                    <li className="footer__inner-item">
                      <a className="footer__inner-link" href="/"> Orders History </a>
                    </li>
                  </ul>
                </div>

                <div className="footer__inner-about">
                  <h4 className="footer__inner-title">ABOUT THE STORE</h4>
                  <p className="footer__inner-text footer__text">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and layouts and visual mockups.
                  </p>
                  <a className="footer__inner-site" href="https://www.company.com">
                    www.company.com
                  </a>

                  <ul className="footer__socials">
                    <li className="footer__social">
                      <a className="footer__social-link" href="/">
                        <img src="images/socials/facebook.svg" alt="Facebook" />
                      </a>
                    </li>
                    <li className="footer__social">
                      <a className="footer__social-link" href="/">
                        <img src="images/socials/instagram.svg" alt="Instagram" />
                      </a>
                    </li>
                    <li className="footer__social">
                      <a className="footer__social-link" href="/">
                        <img src="images/socials/twitter.svg" alt="Twitter" />
                      </a>
                    </li>
                    <li className="footer__social">
                      <a className="footer__social-link" href="/">
                        <img src="images/socials/linkedin.svg" alt="Linkedin" />
                      </a>
                    </li>
                    <li className="footer__social">
                      <a className="footer__social-link" href="/">
                        <img src="images/socials/youtube.svg" alt="Youtube" />
                      </a>
                    </li>
                  </ul>

                  <button className="footer__language">
                    <img src="images/language.svg" alt="" />
                    English
                  </button>
                </div>
              </div>
            </div>
          </footer>

          <div className="introduce">
            <p className="introduce__name">Kateryna Nikolaienko</p>
            <a
              className="introduce__github"
              href="https://github.com/kateryna-nikolaienko/kateryna-nikolaienko.github.io"
            >
              GitHub account
            </a>
            <a
              className="introduce__design"
              href="https://www.figma.com/file/vnIOQPl9yTWOrZruLTzsbc/Untitled?node-id=0%3A7&t=aBC8SpIdPB3B6ulK-0"
            >
              Design
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

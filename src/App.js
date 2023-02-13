import { Component } from "react";
import Slider from "react-slick";
import './App.css';
import './Reset.css';
import './Slick.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from './logo.png';
import playIcon from './assets/icons/play-button.svg';
import headerPicture from './assets/images/header.png';
import burgerIcon from './assets/icons/burger.svg';
import partnerPicture1 from './assets/images/partners/1.png';
import partnerPicture2 from './assets/images/partners/2.png';
import partnerPicture3 from './assets/images/partners/3.png';
import partnerPicture4 from './assets/images/partners/4.png';
import aboutCompany from './assets/images/about.png';
import sliderPicture1 from './assets/images/slider/1.png';
import sliderPicture2 from './assets/images/slider/2.png';
import sliderPicture3 from './assets/images/slider/3.png';
import sliderPicture4 from './assets/images/slider/4.png';
import sliderPicture5 from './assets/images/slider/5.png';
import solutionPicture from './assets/images/solutions.png';
import footerLogo from './assets/images/logo2.png';
import emailIcon from './assets/icons/contacts/email.svg';
import phoneIcon from './assets/icons/contacts/phone.svg';
import locationIcon from './assets/icons/contacts/location.svg';
import facebookIcon from './assets/icons/socials/facebook.svg';
import instagramIcon from './assets/icons/socials/instagram.svg';
import linkedinIcon from './assets/icons/socials/linkedin.svg';
import twitterIcon from './assets/icons/socials/twitter.svg';
import youtubeIcon from './assets/icons/socials/youtube.svg';

class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1580,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
          }
        }
      ]

    };
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
                      <img src={burgerIcon} alt="Burger"></img>
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
                          src={playIcon}
                          alt=""
                        />
                        Watch Video
                      </a>
                    </div>
                  </div>
                  <div className="header__content-right">
                    <img src={headerPicture} alt="Cyber security" />
                  </div>
                </div>

                <ul className="header__bottom header__slider">
                  <li className="header__bottom-item">
                    <img src={partnerPicture1} alt="partner" />
                  </li>
                  <li className="header__bottom-item">
                    <img src={partnerPicture2} alt="partner" />
                  </li>
                  <li className="header__bottom-item">
                    <img src={partnerPicture3} alt="partner" />
                  </li>
                  <li className="header__bottom-item">
                    <img src={partnerPicture4} alt="partner" />
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
                    <img src={aboutCompany} alt="About company" />
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

            <Slider className="slider slick-slider" {...settings}>
              <div className="slider__box slick-list">
                <div className="slider__item">
                  <div className="slider__picture">
                    <img src={sliderPicture1} alt="" />
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
                    <img src={sliderPicture2} alt="" />
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
                    <img src={sliderPicture3} alt="" />
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
                    <img src={sliderPicture4} alt="" />
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
                    <img src={sliderPicture5} alt="" />
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
                    <img src={sliderPicture3} alt="" />
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
            </Slider>

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
                    <img src={solutionPicture} alt="About solutions" />
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
                    <img src={footerLogo} alt="Logotype" />
                  </a>
                  <p className="footer__inner-text">
                    Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and layouts and visual mockups.
                  </p>

                  <div className="footer__inner-contacts">
                    <a className="footer__inner-email" href="mailto:Company@gmail.com">
                      <img
                        className="footer__inner-icon"
                        src={emailIcon}
                        alt="Email"
                      />
                      Company@gmail.com.com
                    </a>
                    <a className="footer__inner-phone" href="tel:064-332-1233">
                      <img
                        className="footer__inner-icon"
                        src={phoneIcon}
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
                        src={locationIcon}
                        alt="location"
                      />
                      450 Wall Street, USA, New York
                    </a>
                  </div>
                </div>

                <div className="footer__inner-box">
                  <h4 className="footer__inner-title">INFORMATION</h4>
                  <ul className="footer__inner-list">
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
                  <ul className="footer__inner-list">
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
                  <ul className="footer__inner-list">
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
                        <img src={facebookIcon} alt="Facebook" />
                      </a>
                    </li>
                    <li className="footer__social">
                      <a className="footer__social-link" href="/">
                        <img src={instagramIcon} alt="Instagram" />
                      </a>
                    </li>
                    <li className="footer__social">
                      <a className="footer__social-link" href="/">
                        <img src={twitterIcon} alt="Twitter" />
                      </a>
                    </li>
                    <li className="footer__social">
                      <a className="footer__social-link" href="/">
                        <img src={linkedinIcon} alt="Linkedin" />
                      </a>
                    </li>
                    <li className="footer__social">
                      <a className="footer__social-link" href="/">
                        <img src={youtubeIcon} alt="Youtube" />
                      </a>
                    </li>
                  </ul>

                  <button className="footer__language">
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

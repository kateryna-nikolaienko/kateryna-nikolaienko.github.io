import React, { useContext } from 'react';
import solutionPicture from '../../assets/images/solutions.png';
import ContextThemeColor from '../../context/ContextThemeColor';

function Solutions() {
  const { theme } = useContext(ContextThemeColor);
  return (
    <section className={`solutions ${theme}`}>
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
  );
}

export default Solutions;

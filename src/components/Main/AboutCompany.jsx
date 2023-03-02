import React, { Component } from 'react';
import PropTypes from 'prop-types';
import aboutCompany from '../../assets/images/about.png';
import Button from '../Buttons/Button';

class AboutCompany extends Component {
  render() {
    const { aboutContent } = this.props;
    return (
      <section className="about">
        <div className="about__container container">
          <div className="about__inner">
            <div className="about__inner-img">
              <img src={aboutCompany} alt="About company" />
            </div>
            <div className="about__inner-content">
              <h2 className="about__inner-title">
                Apply AI, Deep Learning and Data Science to solve
              </h2>
              <p className="about__inner-text">
                {aboutContent}
              </p>
              <Button className="about__inner-button" text="Learn More" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

AboutCompany.propTypes = {
  aboutContent: PropTypes.string.isRequired
};

export default AboutCompany;

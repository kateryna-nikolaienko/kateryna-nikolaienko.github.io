import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Introduce extends Component {
  render() {
    const { introduceName, introduceGithub, introduceDesign } = this.props;
    return (
      <div className="introduce">
        <p className="introduce__name">{ introduceName }</p>
        <a
          className="introduce__github"
          href={introduceGithub}
        >
          GitHub account
        </a>
        <a
          className="introduce__design"
          href={introduceDesign}
        >
          Design
        </a>
      </div>
    );
  }
}

Introduce.propTypes = {
  introduceName: PropTypes.string.isRequired,
  introduceGithub: PropTypes.string.isRequired,
  introduceDesign: PropTypes.string.isRequired,
};

export default Introduce;

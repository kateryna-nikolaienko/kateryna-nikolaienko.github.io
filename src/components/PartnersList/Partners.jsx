import React, { Component } from 'react';
import partnerPicture1 from '../../assets/images/partners/1.png';
import partnerPicture2 from '../../assets/images/partners/2.png';
import partnerPicture3 from '../../assets/images/partners/3.png';
import partnerPicture4 from '../../assets/images/partners/4.png';

class Partners extends Component {
  render() {
    return (
      <ul className="header__bottom">
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
    );
  }
}
export default Partners;

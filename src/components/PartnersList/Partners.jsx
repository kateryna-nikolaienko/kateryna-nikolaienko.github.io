import React, { Component } from 'react';
import partnerPicture1 from '../../assets/images/partners/1.png';
import partnerPicture2 from '../../assets/images/partners/2.png';
import partnerPicture3 from '../../assets/images/partners/3.png';
import partnerPicture4 from '../../assets/images/partners/4.png';
import PartnersItem from './PartnersItem';

class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partnerItems: [
        {
          index: 0,
          src: partnerPicture1,
          alt: 'partner'
        },
        {
          index: 1,
          src: partnerPicture2,
          alt: 'partner'
        },
        {
          index: 2,
          src: partnerPicture3,
          alt: 'partner'
        },
        {
          index: 3,
          src: partnerPicture4,
          alt: 'partner'
        },
      ]
    };
  }

  render() {
    const { partnerItems } = this.state;
    return (
      <ul className="header__bottom">
        {partnerItems.map(({ index, src, alt }) => (
          <PartnersItem key={index} src={src} alt={alt} />
        ))}
      </ul>
    );
  }
}
export default Partners;

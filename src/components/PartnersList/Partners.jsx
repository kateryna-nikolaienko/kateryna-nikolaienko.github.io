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
        <PartnersItem index={0} src={partnerPicture1} alt="partner" />,
        <PartnersItem index={1} src={partnerPicture2} alt="partner" />,
        <PartnersItem index={2} src={partnerPicture3} alt="partner" />,
        <PartnersItem index={3} src={partnerPicture4} alt="partner" />,
      ]
    };
  }

  renderPartnerItems = () => {
    const { partnerItems } = this.state;
    return partnerItems.map((item) => {
      return <div key={item.props.index}>{item}</div>;
    });
  };

  render() {
    return (
      <ul className="header__bottom">
        {this.renderPartnerItems()}
      </ul>
    );
  }
}
export default Partners;

import React from 'react';
import partnerPicture1 from '../../assets/images/partners/1.png';
import partnerPicture2 from '../../assets/images/partners/2.png';
import partnerPicture3 from '../../assets/images/partners/3.png';
import partnerPicture4 from '../../assets/images/partners/4.png';
import PartnersItem from './PartnersItem';

function Partners() { 
  const partnerItems = [
    {
      id: 0,
      src: partnerPicture1,
      alt: 'partner'
    },
    {
      id: 1,
      src: partnerPicture2,
      alt: 'partner'
    },
    {
      id: 2,
      src: partnerPicture3,
      alt: 'partner'
    },
    {
      id: 3,
      src: partnerPicture4,
      alt: 'partner'
    },
  ];

  return (
    <ul className="header__bottom">
      {partnerItems.map(({ id, src, alt }) => (
        <PartnersItem key={id} src={src} alt={alt} />
      ))}
    </ul>
  );
}
export default Partners;

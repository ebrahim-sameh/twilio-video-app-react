import React, { SVGProps } from 'react';
import myLogo from './FoneMe.png' 

export default function TwilioLogo(props: SVGProps<SVGSVGElement>) {
  return (
     <img style={{top:0}} src={myLogo} alt="SVG logo image"/>
  );
}

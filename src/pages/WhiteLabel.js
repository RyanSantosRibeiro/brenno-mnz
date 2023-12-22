import { useEffect, useState } from 'react';
import Banner from '../components/Whitelabel/Banner';
import Steps from '../components/Whitelabel/Steps';
import Gain from '../components/Whitelabel/Gain';
import Contact from '../components/Whitelabel/Contact';


function WhiteLabel() {
  return (
    <div className="WhiteLabel">
        <Banner />
        <Steps />
        <Gain />
        <Contact />
    </div>
  );
}

export default WhiteLabel;
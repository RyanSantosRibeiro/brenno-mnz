import { useEffect, useState } from 'react';
import Banner from '../components/Suits/Banner';
import Steps from '../components/Suits/Steps';
import Gain from '../components/Suits/Gain';
import Contact from '../components/Suits/Contact';


function Suits() {
  return (
    <div className="WhiteLabel">
        <Banner />
        <Steps />
        <Gain />
        <Contact />
    </div>
  );
}

export default Suits;
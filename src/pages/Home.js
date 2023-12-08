import { useEffect, useState } from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Job from '../components/Job';
import Contact from '../components/Contact';
import Pilares from '../components/Pilares';
import Statistics from '../components/Statistics';
import PilaresDetail from '../components/PilaresDetail';
import Brands from '../components/Brands';
import Form from '../components/Form';


function Home() {
  return (
    <div className="Home">
      <Banner />
      <Brands />
      <Form />
      <Statistics />
      {/* <PilaresDetail /> */}
      <About />
      <Pilares />
      <Job />
      {/* <Gallery />  */}
      <Contact />
    </div>
  );
}

export default Home;
import { useEffect, useState } from 'react';
import AboutBrenno from '../components/Brenno/Banner';
import Steps from '../components/Whitelabel/Steps';
import Gain from '../components/Whitelabel/Gain';
import Banner from '../components/Pages/Banner';
import Tabela from '../components/Pages/Tabela';
import Diferenciais from '../components/Pages/Diferenciais';
import Solucoes from '../components/Pages/Soluções';


function Pages() {
  return (
    <div className="Pages">
        <Banner />
        <Solucoes />
        <Diferenciais />
        <Tabela />
    </div>
  );
}

export default Pages;
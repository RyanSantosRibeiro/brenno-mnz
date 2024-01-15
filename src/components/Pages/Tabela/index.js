import React, { useEffect, useState } from 'react';
import './style.scss';
import $ from 'jquery';
import 'jquery.easing';
import check from '../../../assets/img/check.png';
import close from '../../../assets/img/close.png';
import wave1 from '../../../assets/img/wl/wave1.png';
import wave2 from '../../../assets/img/wl/wave2.png';
import foguete from '../../../assets/img/wl/foguete.png';

const Tabela = () => {

    
    const active = (e) => {
        if($("#tabela-pg").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".tabela-pg").hasClass("animate")) {
            $(".tabela-pg").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="tabela-pg" id='tabela-pg'>
            <div className='container'>
                <h2 className='default-title'>Planos<span className='default-subtitle'></span></h2>
            </div>
            <div className='container'>
                <table>
                    <tr>
                        <th className='div1 bnone'></th>
                        <th>
                            <div className='tabela-pg__card tabela-pg__card1'>
                                <h4>Starter</h4>
                                <p>R$ <b>99</b> /mês</p>
                                <p className='aviso1'>Cobrado anualmente</p>
                                <p className='aviso2'>Consulte valor de implantação*</p>
                                <a href=''>Contratar agora</a>  
                            </div>
                        </th>
                        <th>
                            <div className='tabela-pg__card tabela-pg__card2'>
                                <h4>Custom</h4>
                                <p>R$ <b>284</b> /mês</p>
                                <p className='aviso1'>Cobrado anualmente</p>
                                <p className='aviso2'>Consulte valor de implantação*</p>
                                <a href=''>Contratar agora</a>  
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td>Banner principal</td>
                        <td><img src={check} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Seção de apresentação</td>
                        <td><img src={check} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Botão flutuante no WhatsApp</td>
                        <td><img src={check} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Personalização de Estilo e Cores</td>
                        <td><img src={close} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Otimização para dispositivos móveis</td>
                        <td><img src={check} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Formulários de contato personalizáveis</td>
                        <td><img src={close} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Integração com Google Analytics</td>
                        <td><img src={close} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Integração com Google Tag Manager</td>
                        <td><img src={close} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Hospedagem do site</td>
                        <td><img src={check} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Conectar domínio (publicação do site em poucas etapas)</td>
                        <td><img src={check} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Certificado SSL (site seguro e melhor posicionado no Google)</td>
                        <td><img src={check} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    
                    <tr>
                        <td>Relatórios de desempenho do site</td>
                        <td><img src={close} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    <tr>
                        <td>Otimização de SEO</td>
                        <td><img src={check} /></td>
                        <td><img src={check} /></td>
                    </tr>
                    
                    <tr>
                        <td>Chatbot</td>
                        <td>Aguarde</td>
                        <td></td>
                    </tr>
                    
                </table>

                <div className='tabela-pg__card tabela-pg__card1 onlyMobile'>
                                <h4>Starter</h4>
                                <p>R$ <b>99</b> /mês</p>
                                <p className='aviso1'>Cobrado anualmente</p>
                                <p className='aviso2'>Consulte valor de implantação*</p>
                                <ul>
                                    <li> Estratégia e operação de campanhas</li>
                                    <li> Até dois canais de tráfego </li>
                                    <li> Suporte em horário comercial via WhatsApp</li>
                                    <li> Relatório interativo e reuniões mensais de resultados</li>
                                </ul>
                                <a href=''>Contratar agora</a>  
                </div>

                <div className='tabela-pg__card tabela-pg__card2 onlyMobile'>
                                <h4>Custom</h4>
                                <p>R$ <b>284</b> /mês</p>
                                <p className='aviso1'>Cobrado anualmente</p>
                                <p className='aviso2'>Consulte valor de implantação*</p>
                                <ul>
                                    <li> Estratégia e operação de campanhas</li>
                                    <li> Até dois canais de tráfego </li>
                                    <li> Suporte em horário comercial via WhatsApp</li>
                                    <li> Relatório interativo e reuniões mensais de resultados</li>
                                </ul>
                                <a href=''>Contratar agora</a>  
                            </div>
            </div>
        </section>
    )
}

export default Tabela;
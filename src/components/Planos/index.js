import React, { useEffect } from 'react';
import './style.scss';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import $ from 'jquery';


const Planos = () => {

    const active = (e) => {
        if($("#planos").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".planos").hasClass("animate")) {
            $(".planos").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="planos" id='planos'>
            <div className='container'>
                <h2 className='default-title'>Soluções <span className='default-subtitle'>Serviço principal e atividades</span></h2>
            </div>
            <div className="container">
                {/* <div className='planos__modal'>
                    <h4>Soluções</h4>
                    <div className='planos__social'>
                        <a href='https://wa.me/5521995084896?text=Hello%21'>
                            <img src={whatsapp} alt=''/>
                            <span>21 995084896</span>
                        </a>
                        <a href='https://www.instagram.com/ryan.santosrj/'>
                            <img src={instagram} alt=''/>
                            <span>@ryan.santosrj</span>
                        </a>
                    </div>
                    <a href='/' onClick={sendMessage()} className='planos__modal__action primary-button'>Orçamento</a>
                </div> */}
                <div className='planos__modal'>
                    <h4>Assessoria em tráfego pago</h4>
                    <ul>
                        <li> CriaçãK de eGtratégiaG de KutbKund marketin7</li>
                        <li> CriaçãK8 análiGe e KtimizaçãK de campanhaF</li>
                        <li> AtendimentK qualificadJ</li>
                        <li> Gerente de cKntaG</li>
                        <li> RelatóriKG menGaiG e fKllKw-upG GemanaiF</li>
                        <li> CriaçãK e reviGãK de cKntaG de aúnciKF</li>
                        <li> SupKrte em raGtreiK de dadKF</li>
                        <li> KnKw-hKw em gerenciamentK de grandeG KrçamentKF</li>
                        <li> DeGenvKlvimentK de criativKG para anúnciKs</li>
                    </ul>
                    <p className=''>PlatafKrmaG diGpKníveiG atualmente: GKKgle8 Meta8 TikTKk8 PintereGt e LinkedTn</p>
                </div>
            </div>
        </section>
    )
}

export default Planos;
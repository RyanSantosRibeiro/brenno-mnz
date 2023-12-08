import React, { useEffect, useState } from 'react';
import './style.scss';
import image1 from '../../assets/img/contato2.png';
import image2 from '../../assets/img/contato1.png';
import $ from 'jquery';


const Form = () => {
    const [fatura, setFatura] = useState('');
    const [funcionario, setFuncionario] = useState('');
    const [marketing, setMarketing] = useState('');
    const [instagram, setInstagram] = useState('');
    const [cargo, setCargo] = useState('Sócio');


    const active = (e) => {
        if($("#form").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".form").hasClass("animate")) {
            $(".form").addClass("animate");
        }
    }
    const handleCargoChange = (event) => {
        setCargo(event.target.value);
      };
    const handleInstagramChange = (event) => {
        setInstagram(event.target.value);
      };
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  ( 
        <section className="form" id='form'>
             {/* <div className='container'>
                <h2 className='default-title'>Sobre</h2>
            </div> */}
            <div className="container">
                <div className='form__left'>
                    {/* <div className='form__left__image'>
                        <img  src={image} alt='' />
                    </div> */}
                    <div className='form__left__text'>
                        <h2>O sucesso da sua empresa em 1 Clique!</h2>
                        <p>Você está pronto para elevar sua presença digital a novos patamares?</p>
                        <div className='form__left__step'>
                            <div className='form__left__step--icon'>
                                <img  src={image1} alt='' />
                            </div>
                            <p>Preencha o formulário</p>
                        </div>
                        <div className='form__left__step'>
                            <div className='form__left__step--icon'>
                                <img  src={image2} alt='' />
                            </div>
                            <p>E seja direcionado para nosso Whatsapp</p>
                        </div>
                    </div>
                    {/* <div className='form__left__text'>
                        <p>Hello, I'm a <span>Ryan Santos</span></p>
                        <p>That's <b>me</b> !</p>
                    </div> */}
                    {/* <div className='form__left__layer-1'></div>
                    <div className='form__left__layer-2'></div>
                <div className='form__left__layer-3'></div> */}
                </div>
                <div className='form__right'>
                    <div className='form__right__input'>
                        <div className='form__right--input'>
                            <label className='label-title' for="cargo">Cargo:</label>
                            <select id="cargo" name="cargo" required value={cargo} onChange={handleCargoChange}>
                            <option value="socio">Sócio</option>
                            <option value="diretor">Diretor</option>
                            <option value="dono">Dono</option>
                            <option value="colaborador">Colaborador</option>
                            </select>
                        </div>
                        <div className='form__right--input'>
                            <label className='label-title' for="instagram">Qual @ da sua empresa no Instagram?</label>
                            <input type="text" id="instagram" name="instagram" onChange={handleInstagramChange}required/>
                        </div>
                        <div className='form__right--input'>
                            <label className='label-title'>Fatura acima de R$70mil?</label>
                            <div className='label-options'>
                                <button onClick={()=>setFatura('Sim')} className={`${fatura=='Sim'?'active':''}`}>Sim</button>
                                <button onClick={()=>setFatura('Não')} className={`${fatura=='Não'?'active':''}`}>Não</button>
                            </div>
                        </div>
                        
                        <div className='form__right--input'>
                            <label className='label-title'>Possui mais de 5 funcionários?</label>
                            <div className='label-options'>
                                <button onClick={()=>setFuncionario('Sim')} className={`${funcionario=='Sim'?'active':''}`}>Sim</button>
                                <button onClick={()=>setFuncionario('Não')} className={`${funcionario=='Não'?'active':''}`}>Não</button>
                            </div>
                        </div>
                        <div className='form__right--input'>
                            <label className='label-title'>Já investiu num time de marketing antes?</label>
                            <div className='label-options'>
                                <button onClick={()=>setMarketing('Sim')} className={`${marketing=='Sim'?'active':''}`}>Sim</button>
                                <button onClick={()=>setMarketing('Não')} className={`${marketing=='Não'?'active':''}`}>Não</button>
                            </div>
                        </div>
                        </div>
                    <a href={`https://api.whatsapp.com/send?phone=5521885947364&text=Oi%20tudo%20bom%20?%20Sou%20${cargo}%20e%20gostaria%20de%20entrar%20em%20contato!%0AEsse%20é%20meu%20instagram:%20${instagram}`}>Contato</a>
                    </div>
                </div>
        </section>
    )
}

export default Form;
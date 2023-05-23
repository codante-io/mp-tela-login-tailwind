"use client"
import { useEffect, useState } from 'react';
import './globals.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export default function Home() {

  const [email, setEmail] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHelperText, setPasswordHelperText] = useState('');


  const onSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length < 1) {
      setEmailHelperText('Esse campo não pode estar vazio!');
    }
    if (!emailRegex.test(email)) {
      setEmailHelperText('Esse não é um email válido!');
    }
    if (password.length < 1) {
      setPasswordHelperText('Esse campo não pode estar vazio!');
    }
    if (password.length > 1 && email.length > 1 && emailRegex.test(email)) {
      alert('Parabéns pelo login com sucesso. A página de boas-vindas está em construção!')
    }
    return null;
  }

  return (
    <div className="flex flex-row lg:justify-start lg:items-center md:items-center sm:items-start h-full w-full bg-black">
      <div className="absolute inset-0 z-0">
      {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className={`star absolute w-0.5 h-0.5 transition rounded-full bg-white opacity-${Math.floor(Math.random() * 60) + 40}`}
            style={{ top: `${Math.random() * 95}%`, left: `${Math.random() * 95}%` }}
          ></div>
        ))}
      <TransitionGroup className="planet-container">
      {Array.from({ length: 8}).map((_, index) => (
        <CSSTransition key={index} timeout={500} classNames="planet">
          <div
           key={index}
           className={`planet absolute w-20 h-20 transition bg-gray-400 rounded-full bg-center bg-no-repeat bg-planet${index === 0 ? '1' : index}`}
          style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%`, zIndex: -1 }}>
          </div>
        </CSSTransition>
      ))}
      </TransitionGroup>
      </div>
      <div style={{ zIndex: 1}} className="lg:w-3/6 bg-transparent h-4/6 sm:w-2/3 flex flex-row flex-wrap justify-center items-center">
        <div className="flex flex-col w-full h-full justify-start items-start m-5">
          <div className="lg:w-10/12 sm:w-full flex flex-row lg:justify-center   sm:justify-start items-center flex-wrap">
          <h1 className='text-yellow-500 m-0 self-start font-bold text-6xl w-full lg:text-center'>Faça seu login</h1>
          <span className="text-yellow-500 self-start text-center opacity-70 from-stone-500 italic">E que a força esteja com você.</span>
          </div>
          <div className="flex flex-col w-10/12 sm:w-full">
            <label className="text-yellow-500 m-1 font-semibold" htmlFor="email">Email</label>
            <input value={email} onChange={(evt) => {
              setEmail(evt.target.value);
              setEmailHelperText('');
            }} className="w-10/12 px-4 m-2 py-2 border border-yellow-500 rounded-full bg-transparent text-yellow-500 focus:outline-none focus:border-yellow-500" type="text" name="" id="email" />
            {emailHelperText ? <span className="text-red-500 m-1 ml-5">{emailHelperText}</span>: null}
            <label className="text-yellow-500 m-1 font-semibold" htmlFor="password">Senha</label>
            <input value={password} onChange={(evt) => {
              setPassword(evt.target.value);
              setPasswordHelperText('');
            }} className="w-10/12 px-4 py-2 m-2 border border-yellow-500 rounded-full bg-transparent text-yellow-500 focus:outline-none focus:border-yellow-500" type="password" name="" id="password" />
            {passwordHelperText ? <span className="text-red-500 m-1 ml-5">{passwordHelperText}</span>: null}
            <a className="text-yellow-500 underline text-xs text-end m-1 w-10/12">Esqueci minha senha</a>
            <button onClick={onSubmit} className="border m-2 border-yellow-500 bg-transparent text-yellow-500 hover:bg-yellow-500 hover:text-black w-10/12 px-4 py-2 text-2xl font-semibold rounded-full transition-colors duration-300" type="button">Entrar</button>
            <a className="text-yellow-500 w-10/12 underline pt-4 text-center">Ainda não tenho minha conta</a>
          </div>
        </div>
      </div>
    </div>
  )
}

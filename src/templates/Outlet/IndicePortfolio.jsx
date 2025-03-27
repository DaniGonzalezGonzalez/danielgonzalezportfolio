/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function IndicePortfolio({sortedData}) {

  const handleScrollToEdit = (idCategoria) => {
    const editContentElement = document.getElementById(idCategoria);
    if (editContentElement) {
      editContentElement.scrollIntoView({ behavior: "smooth" });
    }
  }


  return (
    <div id="indice" className="relative flex flex-col justify-between p-5 py-10 lg:py-20 bg-slate-950">
      <div className='absolute top-0 left-0 z-10 hidden w-full h-full lg:block' style={{ backgroundImage: `url(${sortedData[0]?.url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', opacity: 0.1 }}></div>
      <div className="absolute top-0 left-0 hidden w-full h-full lg:block" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(3, 7, 18, 1), rgba(2, 6, 23, 1))', backgroundSize: 'cover', backgroundPosition: 'center center', height: '20%' }}></div>
      <div className='relative z-10 flex flex-col gap-10 p-4 rounded'>
        <h4 className="relative z-20 flex items-center justify-start gap-3 mb-10 text-2xl font-bold text-center text-white uppercase lg:text-4xl montserrat-700">ÍNDICE</h4>
        <div className="flex flex-col items-end justify-end gap-4 text-lg text-white montserrat-500">
          <Link to onClick={() => handleScrollToEdit('sobre-mi')}>SOBRE MÍ | 01</Link>
          <Link to onClick={() => handleScrollToEdit('Proyectos-Web')}>PROYECTOS WEB | 02</Link>
          <Link to onClick={() => handleScrollToEdit('experiencias')}>EXPERIENCIA | 03</Link>
          <Link to onClick={() => handleScrollToEdit('formacion')}>FORMACIÓN | 04</Link>
          <Link to onClick={() => handleScrollToEdit('premios')}>PREMIOS | 05</Link>
          <Link to onClick={() => handleScrollToEdit('publicaciones')}>PUBLICACIONES | 06</Link>
        </div>
      </div>
    </div>
  )
}
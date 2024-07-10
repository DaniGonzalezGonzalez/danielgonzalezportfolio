import { Link } from "react-router-dom";

export function IndicePortfolio() {

  const handleScrollToEdit = (idCategoria) => {
    const editContentElement = document.getElementById(idCategoria);
    if (editContentElement) {
      editContentElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="relative flex flex-col justify-between p-5 bg-slate-950">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(3, 7, 18, 1), rgba(2, 6, 23, 1))', backgroundSize: 'cover', backgroundPosition: 'center center', height: '20%' }}/>
      <div className='p-4 rounded flex flex-col gap-10'>
        <h4 className="relative z-20 flex items-center justify-start gap-3 mb-10 text-4xl font-bold text-center text-white uppercase montserrat-700">ÍNDICE</h4>
        <div className="flex flex-col items-end justify-end gap-10 montserrat-500 text-white">
          <Link to onClick={() => handleScrollToEdit('sobre-mi')}>SOBRE MÍ | 01</Link>
          <Link to onClick={() => handleScrollToEdit('Proyectos-Web')}>PROYECTOS WEB | 02</Link>
          <Link to onClick={() => handleScrollToEdit('experiencias')} >EXPERIENCIA | 03</Link>
          <Link to onClick={() => handleScrollToEdit('formacion')} >FORMACIÓN | 04</Link>
          <Link to onClick={() => handleScrollToEdit('premios')} >PREMIOS | 05</Link>
          <Link to onClick={() => handleScrollToEdit('publicaciones')} >PUBLICACIONES | 06</Link>
        </div>
      </div>
    </div>
  )
}

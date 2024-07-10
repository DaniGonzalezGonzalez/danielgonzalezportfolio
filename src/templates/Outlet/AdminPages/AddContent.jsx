import { useRef, useState } from 'react'
import { useAdd } from '../../../hooks/useAdd';
import { EditarContenidoSkeleton } from '../../../components/Skeletons/EditarContenidoSkeleton';

export function AddContent() {
  const tituloRef = useRef(null)
  const tipoContenidoRef = useRef(null)
  const [fecha_inicio, setFechaInicio] = useState('');
  const [fecha_fin, setFechaFin] = useState('');
  const [fecha_actualmente, setFechaActualmente] = useState(false);
  const { handleFileChange, handleSubmit, error, isLoading, handleNombreArchivo, nombreArchivo} = useAdd(tituloRef, tipoContenidoRef)

  const handleFechaInicio = (e) => {
    setFechaInicio(e.target.value)
  }

  const handleFechaFin = (e) => {
    setFechaFin(e.target.value)
  }

  const handleFechaActualmente = (e) => {
    setFechaActualmente(!fecha_actualmente)
    handleFechaFin(e)
  }

  // Crear un arreglo de años (por ejemplo, desde 1900 hasta el año actual)
  const years = []
  const currentYear = new Date().getFullYear()
  for (let year = 1900; year <= currentYear; year++) {
    years.push(year);
  }


  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-800">
      <div className="p-6 mx-8 my-8 bg-gray-600 rounded shadow-lg sm:mx-2">
        <form className='flex flex-col gap-3 space-y-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="tipo-contenido" className="block font-medium text-white font-montserrat">Tipo de contenido</label>
            <select ref={tipoContenidoRef} name="tipoContenido" id="tipo-contenido" className="p-2 border rounded">
              <option value="ProyectosWeb">Proyectos Web</option>
              <option value="Experiencia">Experiencia</option>
              <option value="Formacion">Formación</option>
              <option value="Premios">Premios</option>
              <option value="Publicaciones">Publicaciones</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="titulo" className="block font-medium text-white font-montserrat">Título</label>
            <input ref={tituloRef} className="w-full p-2 border rounded" type="text" name="titulo" id="titulo" placeholder="Añadir título"/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="descripcion" className="block font-medium text-white font-montserrat">Descripción</label>
            <textarea className="p-2 border rounded resize-none" name="descripcion" id="descripcion" placeholder="Añadir descripción" rows="3" cols="33"></textarea>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="enlaceProyectoWeb" className="block font-medium text-white font-montserrat">Enlace al proyecto web {<span className='font-bold text-red-500'>(solo para Proyectos Web)</span>}</label>
            <textarea className="p-2 border rounded resize-none" name="enlaceProyectoWeb" id="enlaceProyectoWeb" placeholder="https://danielgonzalezportfolio.netlify.app/" rows="3" cols="33"></textarea>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="yearStart" className="block font-medium text-white font-montserrat">Fecha Inicio:</label>
            <select className="w-full p-2 border rounded resize-none"  name="yearStart" id="yearStart" value={fecha_inicio} onChange={handleFechaInicio}>
            {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {
            !fecha_actualmente &&
            <div className='flex flex-col gap-2'>
              <label htmlFor="yearEnd" className="block font-medium text-white font-montserrat">Fecha Fin:</label>
              <div>                      
                <select  className="w-full p-2 border rounded resize-none"  name="yearEnd" id="yearEnd" value={fecha_fin} onChange={handleFechaFin}>
                { years.map((year) => (                        
                    <option key={year} value={year}>
                      {year}
                    </option>
                  )) }
                </select> 
              </div>
            </div>
          }
          <div className='flex gap-4'>
            <span className='py-2 font-medium text-white font-montserrat'>Actualmente:</span>
            <input value={currentYear} onChange={handleFechaActualmente} type="checkbox" name="yearEnd" id="yearEnd"/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="file" className="block font-medium text-white font-montserrat">Archivo
            <input className="w-full p-2 mt-2 mb-2 text-sm font-medium text-gray-800 border rounded resize-none font-montserrat" type="text" name="nombreArchivo" value={nombreArchivo} placeholder="Nombre del archivo" onChange={handleNombreArchivo}/>
            <input className="w-full py-2 resize-none" htmlFor="file" type="file" name="file" id="file" onChange={handleFileChange}/>
            </label>
          </div>
          <button disabled={isLoading} className="text-white bg-gray-900 hover:text-white border hover:bg-gray-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center mb-2 font-montserrat">Enviar</button>
          {error?.message && <p className="font-bold text-red-400 font-montserrat">{error.message}</p>}
          {isLoading && <EditarContenidoSkeleton/>}
        </form>
      </div>
    </div>
  )
}

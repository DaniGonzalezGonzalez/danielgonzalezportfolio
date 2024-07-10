import { useParams } from "react-router-dom";
import { getDocument } from "../../helpers/firebase/cloud-firestore";
import { useEffect, useState } from "react";
import { useEditar } from "../../hooks/useEditar";

export function EditarContenido() {
  const [contenido, setContenido] = useState({});
  const [isDisabled, setIsDisabled] = useState(true)
  const parametros = useParams();
  const { option, id } = parametros;

  useEffect(() => {
    getDocument(option, id).then((datos) => setContenido(datos))}, [id])

  const { handleSubmit, showUpdateForm, update, tituloRef, error, handleDelete, isLoading, handleFileChange, handleNombreArchivo, nombreArchivo } = useEditar(contenido.idDoc, option)

  const handleChange = (e) => {
    setContenido({
      ...contenido,
      [e.target.name]: e.target.value
    })
  }

  const handleEliminar = () => {
    setIsDisabled(!isDisabled)
  }
  
  return (
    <>
      <div id='editar-contenido' className="container p-3 mx-auto mt-3 bg-gray-200 rounded">
        <h2 className="mt-8 mb-4 text-2xl text-center text-gray-800 font-montserrat">{contenido.titulo}</h2>
        <p className="text-center text-gray-500 font-montserrat">{contenido.descripcion}</p>
        {/* Div con Formulario para actualizar o eliminar */}
        <div className="flex items-center justify-center p-3 m-3">
          {update && (
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div>
                <label className="block font-bold text-gray-800 font-montserrat" htmlFor="titulo">Titulo</label>
                <input ref={tituloRef} className="p-2 border rounded" type="text" name="titulo" id="titulo" placeholder="Título" value={contenido.titulo} onChange={handleChange}/>
              </div>
              <div>
                <label htmlFor="year" className="block font-bold text-gray-800 font-montserrat">Descripción</label>
                <textarea className="block p-2 border rounded" name="descripcion" id="descripcion" placeholder="Descripción" rows="3" cols="33" value={contenido.descripcion} onChange={handleChange}></textarea>
              </div>
              <div>
                <label htmlFor="year" className="block font-bold text-gray-800 font-montserrat">Año</label>
                <input className="p-2 border rounded resize-none" htmlFor="year" type="text" name="year" id="year" value={contenido.year} onChange={handleChange} />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="file" className="block font-bold text-gray-800 font-montserrat">Añadir Archivo</label>
                <input className="w-full p-2 text-sm font-medium text-gray-800 border rounded resize-none font-montserrat" type="text" name="nombreArchivo" value={nombreArchivo} placeholder="Nombre del archivo" onChange={handleNombreArchivo}/>
                <input className="w-full font-medium text-gray-800 border rounded resize-none font-montserrat" htmlFor="file" type="file" name="file" id="file" onChange={handleFileChange}/>
              </div>
              <button disabled={isLoading} className="p-2 text-sm font-bold text-white bg-black rounded font-montserrat">Enviar</button>
              {error && (<div className="max-w-3/4"><strong className="block w-full p-2 text-center bg-red-500 rounded">{error?.message}</strong></div>
              )}
            </form>
          )}
        </div>
         <div className="flex flex-col items-center justify-center gap-3 m-7">
            {!update ? (<div className="flex items-center justify-center"><button onClick={() => showUpdateForm()} type="button" className="text-white bg-gray-700 hover:text-white border hover:bg-green-600 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-montserrat">Actualizar contenido</button></div>
            ) : (
              <div className="flex items-center justify-center"><button onClick={() => showUpdateForm()} type="button" className="bg-gray-700 text-white hover:bg-yellow-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-montserrat">Cerrar actualización de contenido</button></div>
            )}
            <span className="text-xs font-light text-gray-900 font-montserrat">Si quieres eliminar el contenido marca el recuadro previamente *</span>
           <div className="flex justify-center gap-3">
            <input type="checkbox" name="eliminar" id="eliminar" onChange={handleEliminar}/>
            <button disabled={isDisabled} onClick={() => handleDelete(contenido.idDoc)} type="button" className={`text-white hover:text-white bg-gray-700 ${isDisabled===false && 'hover:bg-red-700'} font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-montserrat`}>Eliminar</button>
            </div>
         </div>
      </div>
    </>
  )
}

/* eslint-disable react/prop-types */
import { useState } from "react"

export function MapExperiencia({ sortedData, tipoContenido, bgIndividualDefecto,bgIndividualOnClick }) {
  const [expandedItem, setExpandedItem] = useState(null)

  const handleItemClick = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null) // Si se hace clic nuevamente en el mismo ítem, se colapsa
    } else {
      setExpandedItem(item)
    }
  };

  return (
    <div id="experiencias" className="relative flex flex-col justify-between p-5 text-white pt-14 bg-slate-950">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(3, 7, 18, 1), rgba(2, 6, 23, 1))', backgroundSize: 'cover', backgroundPosition: 'center center', height: '10%' }}/>
      <div className='p-4 rounded'>
        <h4 className="relative z-10 flex items-center justify-start gap-3 mb-5 text-4xl font-bold text-center uppercase font-montserrat">{tipoContenido}</h4>
        <div className="grid grid-cols-1 gap-4 pt-14 md:grid-cols-3">
          {sortedData.map((item) => (
            <div key={item.idDoc} className={`transition duration-500 flex flex-col items-center justify-start p-4 m-4 rounded hover:shadow-md sx:flex-row hover:shadow-gray-800 sm:w-full ${
                expandedItem === item ? `${bgIndividualOnClick}` : `${bgIndividualDefecto}`
              }`}
              style={{ cursor: "pointer", overflow: "hidden" }}
              onClick={() => handleItemClick(item)}>
                <div className="pt-3">                  
                  <div className="flex justify-center object-cover p-2 min-w-48"><img className="object-cover w-48 h-48 rounded-lg sm:w-48 sm:h-48" src={item?.url} alt='No hay imagen' /></div>
                  <div className="pt-5 text-sm font-bold text-center uppercase font-montserrat">{item?.titulo}</div>
                  {expandedItem === item && (
                  <div className="px-2 py-6 overflow-auto text-sm text-justify montserrat-500">{item?.descripcion}</div>)}
                  <div className="text-sm font-bold text-center uppercase font-montserrat"><div>{'-'}</div><div>{item?.yearStart} {(item.yearEnd && (item.yearEnd !== item.yearStart)) ? `- ${item.yearEnd}` : ''}</div></div>
                  {/* <div className="text-sm font-bold text-center text-gray-900 uppercase font-montserrat"><div>{'-'}</div><div>{item?.yearEnd}</div></div> */}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

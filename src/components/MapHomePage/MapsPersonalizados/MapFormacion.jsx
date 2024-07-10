/* eslint-disable react/prop-types */
import { useState } from "react"

export function MapFormacion({ sortedData, tipoContenido, bgIndividualDefecto,bgIndividualOnClick }) {
  const [expandedItem, setExpandedItem] = useState(null)

  const handleItemClick = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null) // Si se hace clic nuevamente en el mismo ítem, se colapsa
    } else {
      setExpandedItem(item)
    }
  };

  return (
    <div id="formacion" className="relative flex flex-col justify-between p-5 pt-12 bg-zinc-950 text-white">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(2, 6, 23, 1), rgba(9, 9, 11, 1))', backgroundSize: 'cover', backgroundPosition: 'center center', height: '20%' }}/>
      <div className={`p-4 rounded`}>
        <h4 className="relative z-10 flex items-center justify-start gap-3 mb-5 text-4xl font-bold text-center uppercase font-montserrat">{tipoContenido}</h4>
        <div className="relative z-10 flex flex-col text-white items-center">
          {sortedData.map((item) => (
            <div key={item.idDoc} className={`w-5/6 hover:scale-105 flex flex-col items-start justify-center p-4 m-4 rounded hover:shadow-lg transition duration-500 ${
                expandedItem === item ? `${bgIndividualOnClick}` : `${bgIndividualDefecto}`
              }`}
              style={{ cursor: "pointer", overflow: "hidden" }}
              onClick={() => handleItemClick(item)}>
                <div className="py-1 text-sm text-left uppercase montserrat-700">{' | '} {item?.titulo} {' // '} {item?.yearStart} {(item.yearEnd && (item.yearEnd !== item.yearStart)) ? `- ${item.yearEnd}` : ''}</div>
                {expandedItem === item && (
                <div className="px-2 py-4 overflow-auto text-sm text-justify montserrat-500">{item?.descripcion}</div>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

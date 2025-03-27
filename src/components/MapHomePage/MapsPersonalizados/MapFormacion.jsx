/* eslint-disable react/prop-types */
import { useState } from "react"

export function MapFormacion({ sortedData, tipoContenido, bgIndividualDefecto, bgIndividualOnClick }) {
  const [expandedItem, setExpandedItem] = useState(null)

  const handleItemClick = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null)
    } else {
      setExpandedItem(item)
    }
  }

  return (
    <div id="formacion" className="relative flex flex-col justify-between p-5 pt-20 text-white lg:p-10 lg:pb-20 lg:pt-32 bg-zinc-950">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(2, 6, 23, 1), rgba(9, 9, 11, 1))', backgroundSize: 'cover', backgroundPosition: 'center center', height: '20%' }} />
      <div className="p-4 rounded">
        <h4 className="relative z-10 flex items-center justify-center gap-3 mb-10 text-2xl font-bold uppercase lg:text-4xl lg:mb-20 font-montserrat">
          {tipoContenido}
        </h4>
        <div className="relative z-10 flex flex-col items-center w-full text-white">
          {sortedData.map((item) => (
            <div key={item.idDoc} className={`w-full sm:w-[90%] transform transition hover:scale-[1.02] duration-500 flex flex-col items-start justify-center p-6 mb-6 rounded-xl shadow-lg ${expandedItem === item ? bgIndividualOnClick : bgIndividualDefecto}`}
              style={{ cursor: "pointer", overflow: "hidden" }}
              onClick={() => handleItemClick(item)}>
              <div className="flex items-center justify-center w-full lg:justify-between">
                <div className="text-sm font-bold text-center uppercase font-montserrat lg:text-start">
                  {item?.titulo} {' // '} {item?.yearStart} {(item.yearEnd && (item.yearEnd !== item.yearStart)) ? `- ${item.yearEnd}` : ''}
                </div>
              </div>
              {expandedItem === item && (
                <div className="mt-4 text-sm text-justify text-gray-300 transition-opacity duration-300 font-montserrat">
                  {item?.descripcion}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

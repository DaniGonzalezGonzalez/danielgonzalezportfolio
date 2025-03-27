/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ArrowLink } from "../../../assets/Iconos/ArrowLink";

export function MapExperiencia({ sortedData, tipoContenido, bgIndividualDefecto, bgIndividualOnClick }) {
  const [expandedItem, setExpandedItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState({});

  const handleItemClick = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const newVisibleItems = { ...visibleItems };
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          newVisibleItems[entry.target.dataset.id] = true; // Marcar como visible y no volver a ocultarlo.
        }
      });
      setVisibleItems(newVisibleItems);  // Actualizar estado para mantener visibles los que se han mostrado.
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    const elements = document.querySelectorAll(".observed-item");

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [sortedData, visibleItems]);

  return (
    <div id="experiencias" className="relative flex flex-col justify-between w-full p-5 pt-20 text-white lg:p-10 lg:pt-32 bg-slate-950">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(3, 7, 18, 1), rgba(2, 6, 23, 1))', backgroundSize: 'cover', backgroundPosition: 'center center', height: '10%' }} />
      
      {/* Título del contenido (siempre visible) */}
      <div className="w-full rounded-lg hover:rounded-lg">
        <h4 className="relative z-10 flex items-center justify-center gap-3 mb-5 text-2xl font-bold text-center uppercase lg:text-4xl font-montserrat">
          {tipoContenido}
        </h4>
      </div>

      {/* Contenido con animación individual */}
      <div className="grid grid-cols-1 px-2 pt-5 xl:px-10 gap-14 sm:gap-10 sm:pt-7 md:grid-cols-3">
        {sortedData.map((item) => (
          <div
            key={item.idDoc}
            data-id={item.idDoc}
            className={`observed-item relative z-10 transition-all duration-700 flex flex-col items-center sm:items-start justify-start hover:rounded-lg rounded-lg sx:flex-row bg-transparent sm:w-full xl:hover:scale-[1.01] 
            ${expandedItem === item ? bgIndividualOnClick : bgIndividualDefecto} 
            ${visibleItems[item.idDoc] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            onClick={() => handleItemClick(item)}
          >
            <div className="relative w-full overflow-hidden rounded-lg h-60 group">
              <img className="object-cover object-center w-full h-full transition-opacity duration-500 rounded-lg hover:rounded-lg group-hover:opacity-60" src={item?.url} alt="No hay imagen" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-sm text-center text-white transition-opacity duration-500 rounded-lg opacity-0 group-hover:opacity-100 bg-black/60 sm:text-xs lg:text-sm">
                {item?.descripcion}
                {item?.enlaceProyectoWeb && (
                  <a className="p-1 transition duration-500 rounded-lg hover:rounded-lg hover:bg-slate-200 hover:text-black" href={item?.enlaceProyectoWeb} target="_blank" rel="noopener noreferrer"><ArrowLink/></a>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center w-full pt-5 sm:gap-3">
              <div className="text-sm font-bold text-center uppercase font-montserrat">
                {item?.titulo}
              </div>
              <div className="flex flex-col justify-center text-sm font-bold text-center uppercase font-montserrat sm:flex-row sm:gap-3 sm:items-center">
                <div>{item?.yearStart} {(item.yearEnd && (item.yearEnd !== item.yearStart)) ? `- ${item.yearEnd}` : ''}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

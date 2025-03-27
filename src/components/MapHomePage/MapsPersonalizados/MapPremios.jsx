/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { PremioIndividualIcon } from "../../../assets/Iconos";
import { ArrowLink } from "../../../assets/Iconos/ArrowLink";

export function MapPremios({ sortedData, tipoContenido }) {
  const backgroundImageUrl = sortedData[0]?.url || "";

  return (
    <div id="premios" className="relative flex flex-col justify-between p-5 pt-20 text-white lg:p-10 lg:pt-32 bg-gray-950">
      {/* Imagen de fondo */}
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.3)' }} />
      
      {/* Gradualidad superior */}
      <div  className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9, 9, 11, 1), rgba(9, 9, 11, 0))', height: '20%'}}/>
      {/* Gradualidad inferior */}
      <div className="absolute bottom-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to top, rgba(3, 7, 18, 1), rgba(2, 6, 23, 0))', height: '30%' }}/>

      <div className="relative p-4 rounded">
        <h4 className="relative z-10 flex items-center justify-center gap-3 mb-5 text-2xl font-bold text-center text-white uppercase lg:text-4xl font-montserrat">
          {tipoContenido}
        </h4>
        <div className="relative z-10 flex flex-col items-start justify-center gap-8 md:flex-row">
          {sortedData.map((item) => (
            <motion.div key={item.idDoc} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ opacity: { duration: 1.5, ease: "easeOut" }, y: { duration: 0.3, ease: "easeOut" } }} viewport={{ once: true }} className="flex flex-col items-center justify-center w-full pt-4 rounded sm:p-4">
              <div className="text-center">
                <div className="p-3 mt-4 mb-10 text-white transition duration-500 border rounded-full hover:bg-gray-500">
                  <a
                    href={`${item?.titulo === 'Premio "D. G. Marquis Behavioral Neuroscience"' ? 'https://www.apadivisions.org/division-6/awards/marquis?tab=2' : 'https://www.usc.gal/libros/index.php?id_product=251&controller=product'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PremioIndividualIcon />
                  </a>
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-center text-white uppercase font-montserrat">{item?.titulo}</div>
                <div className="px-2 py-6 overflow-auto text-sm text-justify text-white montserrat-500">{item?.descripcion}</div>
                <div className="flex flex-col items-center justify-center gap-3 text-sm font-bold text-center text-white uppercase font-montserrat">
                  <div>{'-'}</div>
                  <div>{item?.yearStart} {(item.yearEnd && item.yearEnd !== item.yearStart) ? `- ${item.yearEnd}` : ''}</div>
                  <div className="p-1 transition duration-500 rounded hover:text-black hover:bg-gray-200">
                    <a href={`${item?.titulo === 'Premio "D. G. Marquis Behavioral Neuroscience"' ? 'https://www.apadivisions.org/division-6/awards/marquis?tab=2' : 'https://www.usc.gal/libros/index.php?id_product=251&controller=product'}`}
                      target="_blank" rel="noopener noreferrer"><ArrowLink/></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { PremioIndividualIcon } from "../../../assets/Iconos";

export function MapPremios({ sortedData, tipoContenido }) {

  return (
    <div id="premios" className="relative flex flex-col justify-between p-5 pt-12 bg-gray-950">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9, 9, 11, 1), rgba(3, 7, 18, 1))', backgroundSize: 'cover', backgroundPosition: 'center center', height: '20%' }}/>
      <div className={`p-4 rounded`}>
        <h4 className="relative z-10 flex items-center justify-start gap-3 mb-5 text-4xl font-bold text-center text-white uppercase font-montserrat">{tipoContenido}</h4>
          <div className="relative z-10 flex flex-col items-start justify-center md:flex-row">
          {sortedData.map((item) => (
            <div
              key={item.idDoc}
              className={`w-full flex flex-col items-center justify-center p-4 rounded`}
            >
              <div className="text-center">
                <div className="p-3 mt-4 mb-10 text-white transition duration-500 border rounded-full hover:bg-gray-500"
                ><a href={`${(item?.titulo === 'Premio "D. G. Marquis Behavioral Neuroscience"' ? 'https://www.apadivisions.org/division-6/awards/marquis?tab=2' : 'https://www.usc.gal/libros/index.php?id_product=251&controller=product')}
                `}>{<PremioIndividualIcon />}</a></div>
              </div>
              <div>
                <div className="text-sm font-bold text-center text-white uppercase font-montserrat">{item?.titulo}</div>
                <div className="px-2 py-6 overflow-auto text-sm text-justify text-white montserrat-500">{item?.descripcion}</div>
                <div className="text-sm font-bold text-center text-white uppercase font-montserrat"><div>{'-'}</div><div>{item?.yearStart} {(item.yearEnd && item.yearEnd !== item.yearStart) ? `- ${item.yearEnd}` : ''}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */

import { LinkIcon } from "../../../assets/Iconos/LinkIcon";

export function MapPublicaciones({ sortedData, tipoContenido }) {

  return (
    <div id="publicaciones" className="flex flex-col justify-between p-5 pt-12 bg-slate-950">
      <div className={`p-4 rounded`}>
        <h4 className="flex items-center justify-start gap-3 mb-5 text-4xl font-bold text-center text-white uppercase font-montserrat">{tipoContenido}</h4>
        <div className="items-start justify-center p-5 flex flex-col gap-5">
          {sortedData.map((item) => (
            <div key={item.idDoc} className={`w-full bg-gray-800 flex flex-col justify-center p-5 rounded-lg shadow-lg transition duration-500 gap-3`}
              >
              <div className="text-sm font-bold text-white uppercase text-start font-montserrat">{item?.titulo}</div>
              {(
                <div className="px-2 py-6 overflow-auto text-sm text-white text-end montserrat-500">{item?.descripcion}</div>)}
                <div className="text-sm font-bold text-white uppercase text-end font-montserrat">
                  <div>{'-'}</div>
                  <div className="flex items-center justify-end gap-3"><a className="p-1 transition duration-500 rounded hover:bg-green-800" href={`${(item?.titulo === 'Is it possible to modify fear memories in humans with extinction training within a single day?' ? 'https://link.springer.com/article/10.1007/s00426-018-1017-4' : 'https://psycnet.apa.org/doiLanding?doi=10.1037%2Fbne0000245')}
                  `}><LinkIcon/></a>{item?.yearStart} {(item.yearEnd && item.yearEnd !== item.yearStart) ? `- ${item.yearEnd}` : ''}</div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

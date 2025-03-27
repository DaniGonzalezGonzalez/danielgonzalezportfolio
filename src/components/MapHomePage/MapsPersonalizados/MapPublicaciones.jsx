import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { ArrowLink } from '../../../assets/Iconos/ArrowLink';
import { ArrowLeft } from '../../../assets/Iconos/ArrowLeft';
import { ArrowRight } from '../../../assets/Iconos/ArrowRight';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function MapPublicaciones({ sortedData }) {
  const [selectedId, setSelectedId] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sortedData.length > 0) {
      setSelectedId(sortedData[0].idDoc);
    }
  }, [sortedData]);

  const getTypeLabel = (descripcion) => {
    if (descripcion.startsWith('Publicación')) return 'Publicación';
    if (descripcion.startsWith('Comunicación')) return 'Comunicación';
    return '';
  };

  const sortedAndFilteredData = [...sortedData].sort((a, b) => {
    const tipoA = getTypeLabel(a.descripcion);
    const tipoB = getTypeLabel(b.descripcion);

    if (tipoA === 'Publicación' && tipoB !== 'Publicación') return -1;
    if (tipoA !== 'Publicación' && tipoB === 'Publicación') return 1;
    return 0;
  });

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div id="publicaciones" className="relative flex flex-col justify-between pt-20 pb-10 lg:pt-32 bg-slate-950">
      <h4 className="flex items-center justify-center gap-3 p-4 mb-8 text-2xl font-bold text-center text-white uppercase lg:mb-16 lg:text-4xl sm:mb-5 font-montserrat">
        Publicaciones y comunicaciones
      </h4>
      <div className="flex flex-col shadow-md bg-slate-200 lg:flex-row">
        <div className="relative w-full p-2 lg:w-1/4 lg:p-10">
          <div className="hidden lg:block">
            {sortedAndFilteredData.map((item) => (
              <div
                key={item.idDoc}
                onClick={() => setSelectedId(item.idDoc)}
                className={`p-4 cursor-pointer rounded-xl transition-all flex flex-col items-start justify-between gap-2 border ${selectedId === item.idDoc ? 'text-gray-900' : 'text-gray-600'} xl:hover:border-green-500 hover:text-gray-800`}
              >
                {getTypeLabel(item?.descripcion) && (
                  <span className={`px-2 py-0.5 mb-1 text-xs rounded-full ${selectedId === item.idDoc ? 'text-green-500 border-2 border-green-500' : 'text-green-500 border border-green-500'}`}>
                    {getTypeLabel(item?.descripcion)}
                  </span>
                )}
                <div className="text-sm">
                  <span>{item?.titulo}</span>
                </div>
              </div>
            ))}
          </div>

          <div className='lg:hidden'>
            <div className="absolute left-0 z-10 transform -translate-y-1/2 cursor-pointer top-1/2 hover:scale-[1.03]" onClick={handlePrev}>
              <ArrowLeft />
            </div>
            <div className="absolute right-0 z-10 transform -translate-y-1/2 cursor-pointer top-1/2 hover:scale-[1.03]" onClick={handleNext}>
              <ArrowRight />
            </div>
          </div>

          <div className="relative lg:hidden">
            <Slider ref={sliderRef} {...settings}>
              {sortedAndFilteredData.map((item) => (
                <div
                  key={item.idDoc}
                  onClick={() => setSelectedId(item.idDoc)}
                  className={`p-4 lg:px-4 px-6 cursor-pointer rounded-xl transition-all flex flex-col items-start justify-between gap-2 border ${selectedId === item.idDoc ? 'text-gray-900' : 'text-gray-600'} xl:hover:border-green-500 hover:text-gray-800`}
                >
                  {getTypeLabel(item?.descripcion) && (
                    <span className={`px-2 py-0.5 mb-1 text-xs rounded-full ${selectedId === item.idDoc ? 'text-green-500 border-2 border-green-500' : 'text-green-500 border border-green-500'}`}>
                      {getTypeLabel(item?.descripcion)}
                    </span>
                  )}
                  <div className="pt-1 text-xs lg:pt-0 lg:text-sm">
                    <span>{item?.titulo.length > 50 ? item?.titulo.substring(0, 50) + '...' : item?.titulo}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="relative w-full bg-transparent lg:w-3/4">
          {sortedAndFilteredData.map((item) => {
            if (item.idDoc !== selectedId) return null;

            return (
              <div key={item.idDoc} className="relative h-[70vh] lg:h-full p-6 bg-center bg-cover"
                style={{ backgroundImage: `url(${item.url})` }}>
                <div className="absolute inset-0 bg-slate-950 opacity-70"></div>
                <div className="relative flex flex-col items-end justify-end h-full text-white">
                  <h2 className="mb-4 text-lg font-bold text-center xl:text-3xl drop-shadow-md lg:text-end">{item?.titulo}</h2>
                  <p className="mb-4 text-sm text-center xl:text-sm lg:text-end drop-shadow-md">{item?.descripcion}</p>
                  <div className="flex items-center gap-3">
                    <a className="p-1 transition duration-500 bg-transparent rounded-lg hover:bg-slate-200 hover:text-black" href={item?.enlaceProyectoWeb} target="_blank" rel="noopener noreferrer">
                      <ArrowLink />
                    </a>
                    <span>
                      {item?.yearStart} {item.yearEnd && item.yearEnd !== item.yearStart ? `- ${item.yearEnd}` : ''}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

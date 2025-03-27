/* eslint-disable react/prop-types */
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft } from "../../../assets/Iconos/ArrowLeft";
import { ArrowRight } from "../../../assets/Iconos/ArrowRight";
import { useRef } from "react";
import { ArrowLink } from "../../../assets/Iconos/ArrowLink";

export function MapProyectosWeb({ sortedData, tipoContenido }) {
  const sliderRef = useRef(null);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 1000, // Transiciones más lentas
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 8000, // Mayor duración entre transiciones
    cssEase: "ease-in-out", // Transiciones más suaves
    customPaging: function(i) {
      return (
        <div className="relative z-10 w-5 h-1 transition duration-300 bg-gray-600 rounded-full hover:bg-gray-200" />
      );
    },
  };

  return (
    <div id="Proyectos-Web" className="relative flex flex-col justify-between pt-20 lg:pt-48 bg-gray-950">
      <div className="relative">
        <h4 className="relative z-10 flex items-center justify-center gap-3 mb-10 text-2xl font-bold text-center text-white uppercase lg:text-4xl lg:mb-14 sm:text-center font-montserrat">{tipoContenido}</h4>
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="slick-carousel">
            {sortedData.map((item) => (
              <div key={item?.idDoc} className="relative pb-10 lg:pb-20">
                <div className="relative flex items-center justify-center min-h-[80vh]">
                  <div className="absolute inset-0 bg-center bg-cover border border-slate-700" style={{ backgroundImage: `url(${item?.url})` }}></div>
                  <div className="absolute inset-0 bg-black opacity-75" />
                  <div className="z-10 p-8 px-16 mt-auto mb-4 text-sm text-white lg:px-20 lg:text-base"> {/* Mueve el texto más abajo */}
                    <h2 className="mb-4 text-xl font-bold uppercase text-start montserrat-700">{item?.titulo}</h2>
                    <p className="text-justify lg:text-sm montserrat-500">{item?.descripcion}</p>
                    <div className="flex items-center justify-end gap-2 mt-4">
                      <a href={item?.enlaceProyectoWeb} className="p-1 transition duration-300 rounded-lg hover:bg-slate-200 hover:text-black">
                        <ArrowLink/>
                      </a>
                        {item?.yearStart} {item?.yearEnd && item.yearEnd !== item.yearStart ? `- ${item.yearEnd}` : ''}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <button className="absolute left-2 text-gray-400 transition duration-300 transform -translate-y-1/2 hover:scale-[1.20] lg:hover:scale-150 lg:left-4 top-1/2" onClick={() => sliderRef.current.slickPrev()}>
            <ArrowLeft w={12} h={12} />
          </button>
          <button className="absolute text-gray-400 transition duration-300 transform -translate-y-1/2 right-2 lg:right-4 top-1/2 hover:scale-[1.20] lg:hover:scale-150" onClick={() => sliderRef.current.slickNext()}>
            <ArrowRight  w={12} h={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

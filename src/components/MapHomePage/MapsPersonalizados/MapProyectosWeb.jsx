/* eslint-disable react/prop-types */
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LinkIcon } from "../../../assets/Iconos/LinkIcon";

export function MapProyectosWeb({ sortedData, tipoContenido }) {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 1000,
    arrows: true,
    dots: true,
    customPaging: function(i) {
      return (
        <div className="w-5 h-1 transition duration-300 bg-gray-600 rounded-full hover:bg-gray-200" />
      );
    },
    focusOnSelect: true,
  };

  return (
    <div id="Proyectos-Web" className="relative flex flex-col justify-between p-5 pt-12 bg-gray-950">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9, 9, 11, 1), rgba(3, 7, 18, 1))', backgroundSize: 'cover', backgroundPosition: 'center center', height: '20%' }}/>
      <div className='relative p-4 rounded'>
        <h4 className="relative z-10 flex items-center justify-start gap-3 mb-5 text-4xl font-bold text-center text-white uppercase font-montserrat">{tipoContenido}</h4>
        {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2"> */}
        <Slider {...settings} className="pt-10 pb-10 slick-carousel">
        {sortedData.map((item) => (
          <div key={item?.idDoc} className="p-4 slick-slide">
            <div className="relative z-10 flex flex-col items-start justify-center p-8 text-xs text-white rounded shadow-lg min-h-60 dark-overlay">
              <div className="absolute top-0 left-0 w-full h-full border rounded-lg border-slate-700" style={{ backgroundImage: `url(${item?.url})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}/>
              <div className="absolute top-0 left-0 w-full h-full bg-black rounded-lg opacity-75"/>
              <div className="z-10">
                <h2 className="pb-4 mt-24 mb-8 text-xl font-bold uppercase sm:mt-48 text-start montserrat-700">{item?.titulo}</h2>
                  <div>
                    <div className="flex flex-col gap-8 px-5 text-justify sm:px-10 montserrat-500">
                      <p>{item?.descripcion}</p>
                      {/* <p>{item?.infoExtra}</p> */}
                      <div className="flex flex-col items-end justify-center"><div>{'-'}</div><div className="flex items-center gap-2"><a href={item?.enlaceProyectoWeb}><LinkIcon/></a>{item?.yearStart} {(item.yearEnd && (item.yearEnd !== item.yearStart)) ? `- ${item.yearEnd}` : ''}</div></div>
                    </div>
                  </div>
              </div>              
            </div>                
          </div>
        ))}
      </Slider>

        {/* </div> */}
      </div>
    </div>
  )
}

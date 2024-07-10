export function SobreMi() {
  return (
      <div id='sobre-mi' className="relative flex flex-col justify-between p-5 pt-12 bg-zinc-950 text-white">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(2, 6, 23, 1), rgba(9, 9, 11, 1))', backgroundSize: 'cover', backgroundPosition: 'center center', height: '20%' }}/>
      <div className="p-4 rounded flex flex-col gap-10">
        <h4 className="relative z-20 flex items-center justify-start gap-3 mb-10 text-4xl font-bold text-center uppercase montserrat-700">
          SOBRE MÍ
        </h4>
        <div className="flex items-end justify-end gap-10 font-medium montserrat-500">
          <div className="flex flex-col items-start justify-end w-2/3 gap-6 pt-10 pb-6 text-justify">
            <p>
              Soy Daniel González, graduado en psicología y máster en neurociencia. Actualmente formándome en desarrollo web, especialmente en la parte front-end. Busco nuevas oportunidades laborales como
              programador, desarrollador web, recruiter IT u otras opciones dentro del sector tecnológico.
            </p>           
            <p>
              Soy organizado, responsable, con capacidad comunicativa y de
              trabajo en equipo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

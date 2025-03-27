/* eslint-disable react/prop-types */
export function SobreMi({sortedData}) {
  return (
    <div id='sobre-mi' className="relative flex flex-col justify-between p-5 pt-32 text-white bg-zinc-950">
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(2, 6, 23, 1), rgba(9, 9, 11, 1))', backgroundSize: 'cover', backgroundPosition: 'center center', height: '20%' }} />
      <div className="relative flex flex-col items-center gap-10 p-6 shadow-xl lg:pb-8 rounded-2xl bg-zinc-900">
        <h4 className="flex items-center gap-3 mb-6 text-2xl font-bold uppercase lg:text-4xl montserrat-700">
          Sobre Mí
        </h4>
        <div className="flex flex-col items-center justify-between w-full gap-10 lg:flex-row lg:px-10">
          <div className="flex justify-center xl:w-1/3">
            <img src={sortedData[2]?.url} alt="Daniel González" className="w-40 h-40 border-4 rounded-full shadow-lg lg:h-80 lg:w-80 border-zinc-700" />
          </div>
          <div className="flex flex-col gap-6 text-justify sm:w-2/3">
            <p>
              Soy <strong>Daniel González</strong>, graduado en Psicología, con un máster en Neurociencia y un certificado de profesionalidad en Desarrollo de Aplicaciones Web. Actualmente, busco nuevas oportunidades laborales, con especial interés en <strong>selección de personal y RRHH</strong>, así como en el ámbito del <strong>desarrollo web frontend</strong>.
            </p>
            <p>
              Me considero una persona <strong>organizada, responsable y comunicativa</strong>, con facilidad para el trabajo en equipo y muchas ganas de seguir aprendiendo y creciendo profesionalmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

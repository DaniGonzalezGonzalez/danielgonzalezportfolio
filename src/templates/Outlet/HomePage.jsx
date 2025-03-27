import { IndicePortfolio } from "./IndicePortfolio"
import { SobreMi } from "./SobreMi"
import { HeadHomePage } from "../../components"
import { useHomepage } from "../../hooks/useHomepage"
import { HomePageSkeleton } from "../../components/Skeletons/HomePageSkeleton"
import { MapExperiencia } from "../../components/MapHomePage/MapsPersonalizados/MapExperiencia"
import { MapFormacion } from "../../components/MapHomePage/MapsPersonalizados/MapFormacion"
import { MapPublicaciones } from "../../components/MapHomePage/MapsPersonalizados/MapPublicaciones"
import { MapPremios } from "../../components/MapHomePage/MapsPersonalizados/MapPremios"
import { MapProyectosWeb } from "../../components/MapHomePage/MapsPersonalizados/MapProyectosWeb"
import { ScrollToTopButton } from "../../components/ScrollToTopButton"

export function HomePage() {
  const { sobreMi, proyectosWeb, experiences, formacion, premios, publicaciones, isLoading, error } = useHomepage()
 
  // Ordenar los elementos por el campo 'titulo' de forma ascendente
  const sortedDataProyectosWeb = proyectosWeb.sort((a, b) => b.yearEnd.localeCompare(a.yearEnd))
  const sortedDataExperiences = experiences.sort((a, b) => b.yearEnd.localeCompare(a.yearEnd))
  const sortedDataFormacion = formacion.sort((a, b) => b.yearEnd.localeCompare(a.yearEnd))
  const sortedDataPremios = premios.sort((a, b) => b.yearEnd.localeCompare(a.yearEnd))
  const sortedDataPublicaciones = publicaciones.sort((a, b) => b.yearEnd.localeCompare(a.yearEnd))

  return (
    <div>
      <div className="min-h-screen"><HeadHomePage sortedData={sobreMi}/></div>
      <div className="flex justify-center">{isLoading && <HomePageSkeleton />}</div>
      <IndicePortfolio sortedData={sobreMi}/>
      {/* Mapeo de cada contenido añadido (vienen de components/MapHomePage/MapsPersonalizados) */}
      <div><SobreMi tipoContenido={'Sobre Mí'} sortedData={sobreMi}/></div>
      <div>
          <MapProyectosWeb tipoContenido={'Proyectos Web'} sortedData={sortedDataProyectosWeb}/>
      </div>

      <div>
          <MapExperiencia bgIndividualOnClick={'bg-gray-800'} bgIndividualDefecto={'bg-gray-950'}
                          tipoContenido={'Experiencia'} sortedData={sortedDataExperiences}/>
      </div>

      <div>
        <MapFormacion bgIndividualOnClick={'bg-indigo-900'} bgIndividualDefecto={'bg-indigo-950'} 
                      tipoContenido={'Formacion'} sortedData={sortedDataFormacion}/>
      </div>

      <div>
        <MapPremios bgIndividualOnClick={'bg-zinc-800'} bgIndividualDefecto={'bg-gray-700'} bgContainer={'bg-zinc-950'}
                    tipoContenido={'Premios'} sortedData={sortedDataPremios} />
      </div>

      <div>
        <MapPublicaciones tipoContenido={'Publicaciones'} sortedData={sortedDataPublicaciones} />
      </div>
      {error && error.message}
      <div className="relative z-50"><ScrollToTopButton/></div>
    </div>
  )
}
  
  
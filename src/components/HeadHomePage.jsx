export function HeadHomePage({ sortedData }) {
  const backgroundImageUrl = sortedData[1]?.url;

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />

      {/* Filtro de oscuridad */}
      <div className="absolute inset-0 bg-slate-950 opacity-80" />

      {/* Contenido principal */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="font-bold text-white text-7xl sm:text-8xl md:text-9xl drop-shadow-lg" style={{ fontSize: "clamp(3rem, 11vw, 11rem)" }}>
          PORTFOLIO
        </h1>
        <h2 className="mt-8 text-3xl font-medium text-white sm:text-4xl md:text-5xl drop-shadow-lg" style={{ fontSize: "clamp(1.5rem, 4vw, 4rem)" }}>
          DANIEL GONZÁLEZ
        </h2>
      </div>
    </div>
  );
}

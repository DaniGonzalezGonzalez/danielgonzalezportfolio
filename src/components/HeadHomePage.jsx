export function HeadHomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-950 shadow-md sm:flex-row sm:items-center">
      <div className="flex flex-col items-center justify-center mb-4 sm:mb-0 sm:w-1/2 sm:pr-8">
        <h1 className="font-bold text-white text-7xl sm:text-8xl md:text-9xl" style={{ fontSize: "clamp(3rem, 11vw, 11rem)" }}>
          PORTFOLIO
        </h1>
        <h2 className="mt-8 text-3xl font-medium text-white sm:text-4xl md:text-5xl" style={{ fontSize: "clamp(1.5rem, 4vw, 4rem)" }}>
          DANIEL GONZÁLEZ
        </h2>
      </div>
    </div>
  );
}

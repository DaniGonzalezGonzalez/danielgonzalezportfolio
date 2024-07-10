import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  const { data, status } = error
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Lo siento, ha ocurrido un error inesperado.</p>
      <p>
        <i>Error {status}: {data}</i>
      </p>
    </div>
  );
}
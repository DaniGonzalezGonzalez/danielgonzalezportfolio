import Skeleton from "react-loading-skeleton";

export function EditarContenidoSkeleton() {
  return (
    <div className="w-screen m-8 mt-8 bg-transparent rounded-lg">
    <div className="flex justify-center mb-2">
      <Skeleton height={40} width={200} />
    </div>
    <div className="flex flex-col items-center justify-center mb-4 space-y-2">
      <Skeleton height={200} width={500} />
      <Skeleton height={200} width={500} />
      <Skeleton height={200} width={500} />
    </div>
  </div>
);
}

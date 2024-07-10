import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function HomePageSkeleton() {
  return (
    <div className="w-screen m-8 mt-8 bg-transparent rounded-lg">
    <div className="mb-2">
      <Skeleton height={40} width={180} />
    </div>
    <div className="flex flex-col items-end justify-center mb-4 space-y-2">
      <Skeleton height={26} width={300} />
      <Skeleton height={26} width={300} />
      <Skeleton height={26} width={300} />
    </div>
    <div className="grid grid-cols-1 gap-16 m-4 mt-20 md:grid-cols-3">
      <div className="flex justify-center">
        <Skeleton height={150} width={150} />
      </div>
      <div className="flex justify-center">
        <Skeleton height={150} width={150} />
      </div>
      <div className="flex justify-center">
        <Skeleton height={150} width={150} />
      </div>
    </div>
  </div>
);
}

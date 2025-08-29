import { lazy, Suspense } from "react";

const Banner = lazy(() => import("../components/Banner"));

const LazyBanner = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] w-full flex items-center justify-center bg-gray-200 animate-pulse">
          Loading Banner...
        </div>
      }
    >
      <Banner />
    </Suspense>
  );
};

export default LazyBanner;

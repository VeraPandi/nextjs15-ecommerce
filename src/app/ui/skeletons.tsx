export function HeroSkeleton() {
  return (
    <section className="animate-pulse">
      <div className="flex flex-col p-8 md:flex-row">
        <div className="flex">
          <div className="flex h-[475px] max-h-[575px] w-[384px] rounded-lg bg-gray-50 opacity-30 shadow-2xl md:h-[575px] md:max-w-[384px] dark:bg-gray-700"></div>
        </div>
        <div className="flex w-full flex-col justify-center py-5 md:p-5 md:pr-0">
          <h1 className="my-4 h-16 rounded-lg bg-gray-100 dark:bg-gray-700"></h1>
          <p className="my-4 h-40 rounded-lg bg-gray-100 py-6 dark:bg-gray-700"></p>
          <p className="my-4 h-5 w-32 rounded-lg bg-gray-100 py-6 dark:bg-gray-700"></p>
        </div>
      </div>
    </section>
  );
}

export function CardSkeleton() {
  return (
    <div className="card animate-pulse shadow-md transition-shadow">
      <figure className="h-48 rounded-lg bg-gray-50 opacity-30 shadow-2xl"></figure>
      <div className="card-body h-[400px]">
        <h2 className="card-title h-10 rounded-lg border-2 border-gray-100 bg-gray-100 px-2 shadow-2xl dark:bg-gray-700"></h2>
        <p className="my-2 h-16 rounded-lg border-2 border-gray-100 bg-gray-100 shadow-2xl dark:bg-gray-700"></p>
        <div className="card-actions">
          <div className="badge h-5 w-12 rounded-lg border border-gray-100 bg-gray-100 shadow-2xl dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

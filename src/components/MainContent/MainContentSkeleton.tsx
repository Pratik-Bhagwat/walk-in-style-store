import Container from "../Container/Container";
import { Skeleton } from "../ui/skeleton";

function MainContentSkeleton() {
  return (
    <main className="mt-16">
      <Container>
        {/* Carousel Skeleton */}
        <div className="max-w-7xl">
          <Skeleton className="w-full sm:h-[280px] md:h-[336px] lg:h-[448px]" />
        </div>
        {/* Quote or tagline Skeleton */}
        <div className="flex flex-col gap-3 mt-4">
          <Skeleton className="w-3/4 h-4 mx-auto" />
          <Skeleton className="w-1/2 h-4 mx-auto" />
        </div>
        {/* Cards of products Skeleton */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[...Array(5)].map((_, index) => (
            <Skeleton
              key={index}
              className="w-full sm:h-[310px] md:h-[375px]"
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default MainContentSkeleton;

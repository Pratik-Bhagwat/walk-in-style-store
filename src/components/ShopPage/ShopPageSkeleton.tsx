import Container from "../Container/Container";
import { Skeleton } from "../ui/skeleton";

function ShopPageSkeleton() {
  return (
    <div className="mt-20">
      <Container>
        <div className="relative flex flex-col gap-4">
          {/* Search input */}
          <div className="flex items-center justify-center">
            <Skeleton className="border rounded-full w-full h-[49px] lg:w-[40%] py-3 px-5" />
          </div>

          {/* Display skeleton for products */}
          <div className="my-8 grid gap-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index}>
                <Skeleton className="w-full h-full sm:w-[310px] sm:h-[310px] md:w-[375px] md:h-[375px] lg:w-[328px] lg:h-[328px] xl:w-[415px] xl:h-[415px]" />

                <div className="mt-3 px-2">
                  <div className="mb-3 flex flex-col gap-3">
                    {/* product name */}
                    <Skeleton className="w-[250px] h-[17px] rounded-lg" />

                    {/* product category */}
                    <Skeleton className="w-[65px] h-[15px] rounded-lg" />
                  </div>

                  {/* product price */}
                  <p className="font-semibold text-lg">
                    <Skeleton className="w-[200px] h-[17px] rounded-lg" />
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Loader for next page
          <div className="mt-10">
            <Skeleton className="w-full sm:h-[310px] md:h-[375px] lg:h-[328px]" />
          </div> */}
        </div>
      </Container>
    </div>
  );
}

export default ShopPageSkeleton;

import Container from "../Container/Container";
import { Skeleton } from "../ui/skeleton";

const ProductPageSkeleton = () => {
  return (
    <div className="mt-28 w-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-26">
          {/* left part contains product images */}
          <div className="flex items-center gap-4">
            {/* images left part */}
            <div className="hidden lg:flex flex-col gap-3 self-start">
              {[...Array(5)].map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-[60px] w-[60px]"
                  style={{ borderRadius: 4 }}
                />
              ))}
            </div>

            {/* image right part */}
            <div className="relative flex flex-col gap-4 self-start">
              <Skeleton className="rounded-lg h-[600px] w-[475px]" />

              {/* images left part for mobile screen is here */}
              <div className="flex gap-3 self-start lg:hidden">
                <Skeleton className="h-[60px] w-[60px]" />
                <Skeleton className="h-[60px] w-[60px]" />
                <Skeleton className="h-[60px] w-[60px]" />
              </div>
            </div>
          </div>

          {/* right part contains product info */}
          <div className="flex flex-col gap-16 w-[90%]">
            <div>
              {/* product name and category */}
              <div className="flex flex-col gap-3">
                <Skeleton className="w-[300px] h-[15px] rounded-lg" />
                <Skeleton className="w-[200px] h-[10px] rounded-lg" />
                {/* product mrp and taxes info */}
                <Skeleton className="w-[280px] h-[10px] rounded-lg" />
                <Skeleton className="w-[300px] h-[15px] rounded-lg" />
              </div>
            </div>

            {/* product sizes */}
            <div className="flex flex-col w-full">
              <Skeleton className="w-[122px]" />
              <div className="flex items-center flex-wrap gap-2 mt-2">
                {[...Array(12)].map((_, idx) => (
                  <Skeleton key={idx} className="w-[122px] h-[48px]" />
                ))}
              </div>
            </div>

            {/* add to cart btn */}
            <div className="mt-4">
              <Skeleton className="rounded-full w-full py-8" />
            </div>

            {/* product description or info */}
            <Skeleton className="my-4" />
          </div>
        </div>

        {/* you may also like carousel section */}
        <div className="max-w-7xl overflow-hidden flex gap-4 items-center mb-8 mt-16">
          {[...Array(5)].map((_, index) => (
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
      </Container>
    </div>
  );
};

export default ProductPageSkeleton;

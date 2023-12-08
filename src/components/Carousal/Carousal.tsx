import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
  autoSlide?: boolean;
  infiniteScroll?: number;
};

function Carousel({ children }: CarouselProps) {
  const slides = Array.isArray(children) ? children : [children];
  const [curr, setCurr] = useState(0);

  // Function to navigate to the previous slide
  function prev() {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  }

  // Function to navigate to the next slide
  function next() {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={prev}
          className="rounded-full p-2 bg-black/20 hover:bg-black/30"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="rounded-full p-2 bg-black/20 hover:bg-black/30"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-3 left-1/2">
        <div className="flex items-center justify-between gap-4">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all w-3 h-3 bg-white ${
                curr === i ? "p-2" : "opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;

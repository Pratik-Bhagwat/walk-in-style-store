import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type CardCarousalProps = {
  children: React.ReactNode;
  heading: string;
};

function CardCarousal({ children: slides, heading }: CardCarousalProps) {
  const [curr, setCurr] = useState(0);

  // Function to navigate to the previous slide
  function prev() {
    if (Array.isArray(slides)) {
      setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    }
  }

  // Function to navigate to the next slide
  function next() {
    if (Array.isArray(slides)) {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }
  }

  return (
    <div className="relative mt-12 overflow-hidden">
      <h1 className="text-2xl p-2 mt-2">{heading}</h1>

      <div className="mt-4 mb-16 flex flex-col gap-3">
        <div className="flex items-center gap-1 self-end">
          <button
            className="border rounded-full p-3 bg-[#E5E5E5]"
            onClick={prev}
          >
            <ChevronLeft />
          </button>
          <button
            className="border rounded-full p-3 bg-[#E5E5E5]"
            onClick={next}
          >
            <ChevronRight />
          </button>
        </div>

        {/* The slides are translated based on the current slide index */}
        <div
          className="flex items-center gap-8 transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${curr * 19}%)` }}
        >
          {slides}
        </div>
      </div>
    </div>
  );
}

export default CardCarousal;

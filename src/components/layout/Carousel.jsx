import { useState } from "react";

const Carousel = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  };

  const nextSlide = () => {
    setActiveIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((img, i) => (
          <div key={i} className="min-w-full flex-shrink-0">
            <img
              src={img}
              alt={`Slide-${i}`}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              activeIndex === i ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

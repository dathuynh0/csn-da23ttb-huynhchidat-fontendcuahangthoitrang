import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const refFigure = useRef(null);

  const images = [
    {
      url: "https://yame.vn/cdn/shop/files/banner_homepage_0410_desktopp.png?v=1759576507&width=2000",
      title: "slide 1",
    },
    {
      url: "https://content.pancake.vn/1/s2640x1486/ab/a4/6f/2d/7126e89818a28bddde6453b00aa3188bf273df54dedc5515b0f3ea96-w:6206-h:3492-l:8441411-t:image/jpeg.jpeg",
      title: "slide 2",
    },
    {
      url: "https://yame.vn/cdn/shop/files/banner_homepage_0211_pc.jpg?v=1762093829&width=2000",
      title: "slide 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length, index]);

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="relative group w-full lg:h-screen lg:container mx-auto mb-8">
      <div className="w-full h-full overflow-hidden">
        <figure
          ref={refFigure}
          id="slideshow"
          className="w-full flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {images.map((image, i) => (
            <img
              key={i}
              src={image.url}
              alt={image.title}
              className="w-full object-cover shrink-0"
            />
          ))}
        </figure>
      </div>

      <Button
        onClick={handlePrev}
        className="absolute left-5 top-[45%] p-6 bg-white hover:bg-black hover:text-white shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        variant="outline"
      >
        <ArrowLeft className="size-6" />
      </Button>

      <Button
        onClick={handleNext}
        className="absolute right-5 top-[45%] p-6 bg-white hover:bg-black hover:text-white shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        variant="outline"
      >
        <ArrowRight className="size-6" />
      </Button>

      {/* dot */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              index === i ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SlideShow;

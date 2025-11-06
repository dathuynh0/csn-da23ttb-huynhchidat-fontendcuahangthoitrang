import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const image = [
    "https://content.pancake.vn/1/s2640x1486/ab/a4/6f/2d/7126e89818a28bddde6453b00aa3188bf273df54dedc5515b0f3ea96-w:6206-h:3492-l:8441411-t:image/jpeg.jpeg",
    "https://yame.vn/cdn/shop/files/banner_homepage_0410_desktopp.png?v=1759576507&width=2000",
    "https://yame.vn/cdn/shop/files/banner_homepage_0211_pc.jpg?v=1762093829&width=2000",
    "https://owen.cdn.vccloud.vn/media/codazon/slideshow/b/a/banner_hoang_duc_web.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % image.length);
      console.log("Interval run");
      console.log(index);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [index, image.length]);

  const currentImage = image[index];

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  return (
    <section className="relative group w-full h-[50vh] lg:h-screen mb-8">
      <Button
        onClick={handlePrev}
        className="absolute left-5 top-[45%] bg-white hover:bg-black hover:text-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        variant="outline"
        size="lg"
      >
        <ArrowLeft className="size-6" />
      </Button>

      <picture className="w-full h-full">
        <img
          src={currentImage}
          alt="Banner quảng cáo"
          className="w-full h-full object-cover"
        />
      </picture>
      <Button
        onClick={handleNext}
        className="absolute right-5 top-[45%] bg-white hover:bg-black hover:text-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
        variant="outline"
        size="lg"
      >
        <ArrowRight className="size-6" />
      </Button>
    </section>
  );
};

export default Banner;

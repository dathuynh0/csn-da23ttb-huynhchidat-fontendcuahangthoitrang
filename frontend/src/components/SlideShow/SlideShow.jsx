import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";
import slide1_mobile from "../../assets/slide1_mobile.png";
import slide2_mobile from "../../assets/slide2_mobile.png";
import slide3_mobile from "../../assets/slide3_mobile.png";
import slide4_mobile from "../../assets/slide4_mobile.png";
import { Link } from "react-router";

const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      image: slide1,
      link: "/sale",
    },
    {
      image: slide2,
      link: "/do-nam",
    },
    {
      image: slide3,
      link: "/do-nu",
    },
    {
      image: slide4,
      link: "/phu-kien",
    },
  ];

  const imagesMobile = [
    {
      image: slide1_mobile,
      link: "/sale",
    },
    {
      image: slide2_mobile,
      link: "/do-nam",
    },
    {
      image: slide3_mobile,
      link: "/do-nu",
    },
    {
      image: slide4_mobile,
      link: "/phu-kien",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, index]);

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="relative group w-full h-full lg:container mx-auto mb-8">
      <div className="hidden md:block w-full h-full rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <Link to={images[index].link} key={index}>
            <motion.img
              src={images[index].image}
              alt="Slide show"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </Link>
        </AnimatePresence>
      </div>
      {/* mobile */}
      <div className="md:hidden w-full h-[65vh] rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <Link to={imagesMobile[index].link} key={index}>
            <motion.img
              src={imagesMobile[index].image}
              alt="Slide show"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "linear" }}
              className="w-full h-full object-cover"
            />
          </Link>
        </AnimatePresence>
      </div>

      <Button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 p-6 text-white lg:opacity-0 lg:group-hover:opacity-100 transition-opacity cursor-pointer z-10"
        variant="ghost"
        aria-label="Previous slide"
      >
        <ArrowLeft className="size-8" />
      </Button>

      <Button
        onClick={handleNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 p-6 text-white lg:opacity-0 lg:group-hover:opacity-100 transition-opacity cursor-pointer z-10"
        variant="ghost"
        aria-label="Next slide"
      >
        <ArrowRight className="size-8" />
      </Button>

      {/* dot */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
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

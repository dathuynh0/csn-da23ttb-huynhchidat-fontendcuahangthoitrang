import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
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
      link: "/do-nu",
    },
    {
      image: slide3,
      link: "/do-nam",
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
    <section className="relative group w-full lg:container mx-auto mb-8">
      <div className="w-full lg:h-[75vh] rounded-lg overflow-hidden">
        <AnimatePresence>
          <Link to={images[index].link}>
            <motion.img
              key={index}
              src={images[index].image}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
              className="w-full h-full object-cover object-center"
            />
          </Link>
        </AnimatePresence>
      </div>

      <Button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 p-6 bg-white hover:bg-black hover:text-white shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        variant="outline"
      >
        <ArrowLeft className="size-6" />
      </Button>

      <Button
        onClick={handleNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 p-6 bg-white hover:bg-black hover:text-white shadow-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
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

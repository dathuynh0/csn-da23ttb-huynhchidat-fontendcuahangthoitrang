import { Link } from "react-router";
import { Button } from "./ui/button";

const ProductCategories = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full lg:container mx-auto mt-6 flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mb-10 p-4"
    >
      <Card
        title="Nam"
        description="Thời Trang Nam – Lịch Lãm & Cá Tính"
        imageUrl="https://cdn.shopify.com/s/files/1/0932/5569/6681/files/1O4A3024_500x.jpg?v=1757903878"
        link="/do-nam"
      />
      <Card
        title="Nữ"
        description="Thời Trang Nữ Mới Nhất – Dịu Dàng & Cá Tính"
        imageUrl="https://cdn.shopify.com/s/files/1/0932/5569/6681/files/1O4A9203_500x.jpg?v=1757905339"
        link="/do-nu"
      />
    </div>
  );
};

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="w-full flex flex-col">
      <Link to={link} className="block overflow-hidden rounded-lg aspect-[5/4]">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          src={imageUrl}
          alt={title}
        />
      </Link>
      <div className="flex flex-col flex-grow text-center p-4">
        <h2 className="text-4xl lg:text-5xl font-light mt-4">{title}</h2>
        <p className="text-base text-gray-600 mt-4 flex-grow">{description}</p>
        <div className="mt-6">
          <Link to={link}>
            <Button
              size="lg"
              variant="outline"
              className="text-lg font-light px-10 py-6 hover:bg-black/80 hover:text-white/90 transition-colors duration-300"
            >
              Mua ngay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;

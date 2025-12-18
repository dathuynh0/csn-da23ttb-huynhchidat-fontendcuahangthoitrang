import { Link } from "react-router";
import { Button } from "./ui/button";

const ProductCategories = () => {
  return (
    <section className="w-full lg:container mx-auto mt-6 ">
      <div className="text-center">
        <h1 className="inline-block border-b uppercase pb-2 text-2xl lg:text-3xl font-medium">
          Danh mục sản phẩm
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 p-4"
      >
        <Card
          title="Nam"
          description="Khám phá Thời trang nam tại MODA – nơi tinh thần hiện đại kết hợp với sự lịch lãm qua những thiết kế cao cấp, sang trọng."
          imageUrl="https://cdn.shopify.com/s/files/1/0932/5569/6681/files/33_148f8f8f-5d57-4afe-88cf-e35a8dea7f1c_500x.png?v=1757584482"
          link="/do-nam"
        />
        <Card
          title="Nữ"
          description="Thanh lịch, tinh tế và đẳng cấp – Thời trang nữ tại MODA giúp tôn vinh phong cách riêng của mỗi quý cô."
          imageUrl="https://cevoidcontent.com/images/nEeQkFwcGAQ3d8evBcpNO/original.jpeg?class=360"
          link="/do-nu"
        />
        <Card
          title="Phụ kiện"
          description="Hiện đại, tinh tế và sang trọng - Phụ kiện tại MODA giúp tô thêm vẻ đẹp của người mang với thiết kế cao cấp, sang trọng."
          imageUrl="https://armyhaus.com/wp-content/uploads/2021/05/tui-deo-cheo-di-choi-08.jpg"
          link="/phu-kien"
        />
      </div>
    </section>
  );
};

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="w-full flex flex-col">
      <Link to={link} className="block overflow-hidden aspect-[1/1] rounded-lg">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          src={imageUrl}
          alt={title}
        />
      </Link>
      <div className="flex flex-col flex-grow text-center p-4">
        <h2 className="text-4xl lg:text-5xl font-light mt-4">{title}</h2>
        <p className="text-base text-gray-600 mt-4">{description}</p>
        <div className="mt-6">
          <Link to={link}>
            <Button
              size="lg"
              variant="outline"
              className="text-md font-light px-8 py-6 hover:bg-black/80 hover:text-white/90 transition-colors duration-300 cursor-pointer"
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

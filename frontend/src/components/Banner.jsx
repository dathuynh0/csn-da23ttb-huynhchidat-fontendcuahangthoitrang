import { Link } from "react-router";

const Banner = ({ link, image }) => {
  return (
    <div className="w-full lg:container mx-auto my-8">
      <Link to={link}>
        <img className="object-cover rounded-lg" src={image} alt="Banner" />
      </Link>
    </div>
  );
};

export default Banner;

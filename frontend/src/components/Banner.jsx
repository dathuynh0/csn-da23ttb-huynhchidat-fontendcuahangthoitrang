import { Link } from "react-router";

const Banner = ({ link, image }) => {
  return (
    <div className="w-full lg:container mx-auto object-cover">
      <Link to={link}>
        <img src={image} alt="Banner" />
      </Link>
    </div>
  );
};

export default Banner;

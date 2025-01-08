import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  const images = [
    "FRONT_VIEW.jpg",
    "SW_VIEW.jpg",
    "TERRACE_VIEW.jpg",
    "INTERNAL_VIEW.png"
  ];

  return (
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showStatus={false}
        >
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/img/${img}`}
                alt={`img-${index}`}
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
  );
};

export default Gallery;

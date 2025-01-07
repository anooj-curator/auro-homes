// import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  const images = [
    "1_FRONT_VIEW_2.jpeg",
    "auroHomes.png",
    // "image3.jpg",
    // Add more image URLs here
  ];

  return (
    <section className="gallery" id="gallery">
      <div
        className="gallery__content-box"
        style={{
          width: 800,
          margin: "auto",
          padding: "12rem 8rem",
          backgroundColor: "#f9f9fb",
        }}
      >
        {/* <Carousel
          //   showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={2000}
          // width={800}
          //   centerMode={true}

          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          {images.map((img, index) => (
            <div style={{ height: "auto" }}>
              <img
                src={`${process.env.PUBLIC_URL}/img/${img}`}
                alt={`img-${index}`}
              />
            </div>
          ))}
        </Carousel> */}
      </div>
    </section>
  );
};

export default Gallery;

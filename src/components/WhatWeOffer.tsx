export const WhatWeOffer = () => (
  <section className="what-we-offer">
    <div className="heading__fix u-center-text">
      <h3 className="heading-tertiary u-margin-bottom-small">Our services</h3>
    </div>

    <h2 className="heading-secondary u-margin-bottom-small u-center-text">
      What we do offer
    </h2>
    <p className="paragraph u-margin-bottom-big u-center-text">
      As a leader in our industry, we have always worked to develop advanced
      technology and innovative methods.
    </p>

    <div className="what-we-offer__content-box">
      <div className="what-we-offer__content">
        <h4 className="what-we-offer__title u-margin-bottom-small">
          <span className="icon-box">
            <svg className="icon">
              <use xlinkHref="img/sprite.svg#crane"></use>
            </svg>
          </span>
          Independent house feel
        </h4>
        {/* <p className="paragraph">
          Whatever your construction requirements we can help you - from new
          builds to refurbishments.
        </p> */}
      </div>
      <div className="what-we-offer__content">
        <h4 className="what-we-offer__title u-margin-bottom-small">
          <span className="icon-box">
            <svg className="icon">
              <use xlinkHref="img/sprite.svg#compass"></use>
            </svg>
          </span>
          Spacious with High ceiling
        </h4>
        {/* <p className="paragraph">
          Building Design, Interior Design, Structural Design, 3D Visualization.
        </p> */}
      </div>
      <div className="what-we-offer__content">
        <h4 className="what-we-offer__title u-margin-bottom-small">
          <span className="icon-box">
            <svg className="icon">
              <use xlinkHref="img/sprite.svg#electric"></use>
            </svg>
          </span>
          Ventilation
        </h4>
        {/* <p className="paragraph">
          We install and cable associated devices such as switches, distribution
          boards, sockets, and light fittings in a structure.
        </p> */}
      </div>
      <div className="what-we-offer__content">
        <h4 className="what-we-offer__title u-margin-bottom-small">
          <span className="icon-box">
            <svg className="icon">
              <use xlinkHref="img/sprite.svg#view"></use>
            </svg>
          </span>
          Eco Friendly
        </h4>
        {/* <p className="paragraph">
          Hard landscaping projects create an interesting outside area to your
          property and will add to its value.
        </p> */}
      </div>
    </div>
  </section>
);

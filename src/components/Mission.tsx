export const Mission = () => (
  <section className="mission">
    <h3 className="heading-tertiary u-margin-bottom-small">Our Mission</h3>
    <div className="mission__container">
      <div className="mission__content-box mission__left">
        <div className="mission__content">
          <h4 className="mission__title u-margin-bottom-small">Vision</h4>
          <p className="paragraph">
            Our Vision is to be one of the prestigious Building Construction
            organizations providing lasting edifice for our clients all over
            Africa, with world-className technology at a competitive cost.
          </p>
        </div>

        <div className="mission__content">
          <h4 className="mission__title u-margin-bottom-small">Mission</h4>
          <p className="paragraph">
            Our mission as an organization is to bridge the gap between Africa
            and the western world in terms of quality product, service delivery.
          </p>
        </div>
      </div>

      <div className="mission__right">
        <div className="mission__img-box">
          <img
            src="img/mission-img-2x.png"
            alt="Mission"
            className="mission__img"
            srcSet="img/mission-img-1x.png 1x, img/mission-img-2x.png 2x"
          />
        </div>
      </div>
    </div>
  </section>
);

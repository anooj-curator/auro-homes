export const Mission = () => (
  <section className="mission">
    <h3 className="heading-tertiary u-margin-bottom-small">Our Mission</h3>
    <div className="mission__container">
      <div className="mission__content-box mission__left">
        <div className="mission__content">
          <h4 className="mission__title u-margin-bottom-small">Vision</h4>
          <p className="paragraph">
            To build homes that are more than just structures, but lifelong
            spaces of comfort and belonging. We aim to deliver exceptional
            quality that lasts a lifetime, creating homes where people feel
            truly at home.
          </p>
        </div>

        <div className="mission__content">
          <h4 className="mission__title u-margin-bottom-small">Mission</h4>
          <p className="paragraph">
            Our mission is to be the pioneer in building standalone's with
            exclusive floor.
          </p>
        </div>
      </div>

      <div className="mission__right">
        <div className="mission__img-box">
          <img
            loading="lazy"
            src="img/1_FRONT_VIEW_2.jpeg"
            alt="Mission"
            className="mission__img"
          />
        </div>
      </div>
    </div>
  </section>
);

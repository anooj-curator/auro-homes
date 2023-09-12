import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};
export const ContactUs = () => {
  const [formData, setFormData] = useState({
    ...initialFormData,
  });

  const updateForm = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };
  return (
    <section className="contact-us" id="contact-us">
      <h3 className="heading-tertiary u-margin-bottom-small">Contact Us</h3>
      <div className="contact-us__container">
        <div className="contact-us__left">
          <h2 className="heading-secondary u-margin-bottom-small">
            Let's Talk
          </h2>
          <p className="paragraph u-margin-bottom-mid">
            We've found that we deliver the greatest value to our clients when
            we establish ongoing relationships that allow us to materially
            contribute to their long-term success.
          </p>

          {/* <div className="contact-us__inner-content-box">
              <h3 className="contact-us__title u-margin-bottom-small">
                <span className="contact-us__icon-box">
                  <svg className="arr-down">
                    <use xlinkHref="img/sprite.svg#arrow-down-green"></use>
                  </svg>
                </span>
                Visit us personally
              </h3>
              <p className="paragraph u-margin-bottom-small">
                Beside Atta Quarshie Merton Memorial Hospital Ave 2nd Floor,
                Kaneshie, Accra.
              </p>

              <div className="contact-us__img-box">
                <img
                  src="img/map-2x.png"
                  alt="Our Location"
                  className="contact-us__img"
                  srcSet="img/map-1x.png 1x, img/map-2x.png 2x"
                />
              </div>
            </div> */}
        </div>

        <div className="contact-us__right">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setFormData({ ...initialFormData });
            }}
            className="contact-us__form form"
          >
            <div className="form__col form__col--1 u-margin-bottom-small">
              <div className="form__group">
                <label htmlFor="name" className="form__label">
                  Name
                </label>
                <input
                  className="form__input"
                  type="name"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateForm("name", e.target.value)}
                  placeholder="Michael Mensah"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="contact-email" className="form__label">
                  Email
                </label>
                <input
                  className="form__input"
                  type="email"
                  name="contact-email"
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                  placeholder="Micheal@example.com"
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="form__col form__col--2 u-margin-bottom-mid">
              <div className="form__group">
                <label htmlFor="message" className="form__label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="form__textarea"
                  value={formData.message}
                  onChange={(e) => updateForm("message", e.target.value)}
                  required
                  placeholder="Say Something..."
                ></textarea>
              </div>
            </div>

            <button className="btn btn--green">Send us a message</button>
          </form>
        </div>
      </div>
    </section>
  );
};
